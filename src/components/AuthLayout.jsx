import { useLocation, useOutlet, Link } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import backgroundImage from "../assets/background.jpg"

function AuthLayout() {
  const location = useLocation()
  const currentOutlet = useOutlet()

  return (
    <main className="relative min-h-screen w-screen overflow-y-auto overflow-x-hidden flex items-center justify-center p-4">
      {/* Static Background Image */}
      <img
        src={backgroundImage}
        alt="Nexora Background"
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Static Content Layout */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center my-auto py-8">
        {/* Static Brand Name */}
        <div className="mb-8 text-center">
          <Link
            to="/login"
            className="inline-block text-6xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] select-none hover:opacity-95 transition-opacity"
          >
            nexora.
          </Link>
        </div>

        {/* Page Content: Login / Signup / Forgetpassword with smooth transition */}
        <div className="w-full flex justify-center items-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname === "/" ? "/login" : location.pathname}
              initial={{ opacity: 0, y: 16, scale: 0.98, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, scale: 0.98, filter: "blur(4px)" }}
              transition={{
                duration: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full flex justify-center"
            >
              {currentOutlet}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
