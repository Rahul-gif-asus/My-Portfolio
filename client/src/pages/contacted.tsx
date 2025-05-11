import { useState, useEffect } from 'react';
import { getContactSubmissions, ContactFormData } from '@/lib/firebase';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactSubmission extends ContactFormData {
  id: string;
}

export default function ContactedPage() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<ContactSubmission | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const submissions = await getContactSubmissions() as ContactSubmission[];
        setContacts(submissions);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1200);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Contact Submissions
          </h1>

          <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, idx) => (
                    <tr
                      key={contact.id}
                      className={`cursor-pointer transition-colors duration-150 ${idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'} hover:bg-primary/10 dark:hover:bg-primary/20`}
                      onClick={() => setSelected(contact)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {contact.createdAt?.toDate().toLocaleDateString('en-US', {
                          year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{contact.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        <a href={`mailto:${contact.email}`} className="text-primary hover:text-blue-600 transition-colors underline">{contact.email}</a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{contact.subject}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 max-w-xs truncate">{contact.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {contacts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No contact submissions yet.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Modal for details */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-md w-full p-8 relative"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-primary text-xl"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-primary">Contact Details</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Name:</span>
                  <span className="ml-2 text-gray-900 dark:text-white">{selected.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Email:</span>
                  <a href={`mailto:${selected.email}`} className="text-primary underline break-all">{selected.email}</a>
                  <button
                    className="ml-1 px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded hover:bg-primary/20"
                    onClick={() => handleCopy(selected.email, 'email')}
                  >
                    {copied === 'email' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Subject:</span>
                  <span className="ml-2 text-gray-900 dark:text-white">{selected.subject}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Message:</span>
                  <span className="ml-2 text-gray-900 dark:text-white break-words">{selected.message}</span>
                  <button
                    className="ml-1 px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded hover:bg-primary/20"
                    onClick={() => handleCopy(selected.message, 'message')}
                  >
                    {copied === 'message' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Date:</span>
                  <span className="ml-2 text-gray-900 dark:text-white">{selected.createdAt?.toDate().toLocaleString('en-US', {
                    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                  })}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 