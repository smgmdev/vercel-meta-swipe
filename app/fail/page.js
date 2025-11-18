export default function FailPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f7] text-center p-6">
      <h1 className="text-2xl font-semibold mb-2">Payment Failed</h1>
      <p className="text-black/70 max-w-md">
        Unfortunately, your payment could not be completed.  
        You may try again or choose a different payment method.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 rounded-full bg-black text-white text-sm tracking-[0.2em] uppercase"
      >
        Back to App
      </a>
    </div>
  );
}
