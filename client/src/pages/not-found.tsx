import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* 404 Text with Gradient */}
          <motion.h1 
            className="text-8xl md:text-9xl font-bold"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              404
            </span>
          </motion.h1>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Oops! It seems you've ventured into unknown territory. 
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Button
              onClick={() => setLocation("/")}
              className="px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <i className="fas fa-home mr-2"></i>
              Back to Home
            </Button>
            <Button
              onClick={() => setLocation("/contact")}
              variant="outline"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-800 dark:text-gray-200 rounded-lg transition-all"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact Me
            </Button>
          </motion.div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-full blur-3xl"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-primary/10 to-blue-600/10 rounded-full blur-3xl"
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
