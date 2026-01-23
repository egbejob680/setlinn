 export function AuthVisual() {
    return (
    <div className="relative hidden w-1/2 lg:flex flex-col justify-center items-center bg-primary overflow-hidden">
    <div
    className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
    style={{
    backgroundImage:
    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYF5qXdziutuJNtjW78EZbsnqW-87PYyfNQhF7j6i2tb0bys1mhnaVAHc5MSGWe4WQ0tRdeVkEuGqgavInMp_Th-5KEuM946lkmUAw-Z8aNlFUyWn3vUpvieQpp-4JRkk5BspbgvsWlkqlTzbbWukwEKhitOpOYNJ4V-baBYAGmCOtyL_H7wx52xdX_4vJ1PkCnQIS9dVse14hYL_ayI02RSPgGrBAZZb1vsdf4clgkXV1tOCcQs7LB7os1_Sai9YTB_vp1EhgCQI')",
    }}
    />
    <div className="absolute inset-0 z-10 bg-linear-to-br from-[#0d94af]/80 to-[#0d94af]/40" />
    
    
    <div className="relative z-20 px-16 text-white max-w-xl">
    <h1 className="text-5xl font-extrabold leading-tight mb-6">
    Welcome Back to Your Global Community
    </h1>
    <p className="text-xl font-medium opacity-90 leading-relaxed">
    Connect with students and professionals worldwide to share opportunities and build your future.
    </p>
    </div>
    </div>
    )
    }