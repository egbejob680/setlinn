export default function NewsletterCard() {
    return (
      <div className="bg-[#111718] rounded-xl p-6 text-white">
        <h4 className="font-bold mb-2">Never miss an update</h4>
        <p className="text-xs text-gray-400 mb-4">
          Get guides and tips delivered to your inbox.
        </p>
  
        <div className="flex gap-2">
          <input
            className="flex-1 rounded-lg px-3 py-2 text-black text-sm"
            placeholder="Email address"
          />
          <button className="bg-[#0d94af] px-4 rounded-lg font-bold">→</button>
        </div>
      </div>
    );
  }
  