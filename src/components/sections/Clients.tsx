export default function Clients() {
  const clients = [
    { name: "ChatGPT UIs", url: "https://chatgpt.com" },
    { name: "VSCode Extensions", url: "https://vscode.dev" },
    { name: "Python SDKs", url: "https://python.org" },
    { name: "JavaScript SDKs", url: "https://js.org" },
    { name: "Slack Bots", url: "https://slack.com" },
    { name: "Discord Bots", url: "https://discord.com" },
    { name: "ChatKit", url: "https://chatkit.app" },
    { name: "ChatWise", url: "https://chatwise.app" },
    { name: "Many many more...", url: "https://chatgpt.com" },
  ]

  return (
    <section id="clients" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2>Tested & Compatible Clients</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Works seamlessly with these clients and many more OpenAI-compatible tools.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {clients.slice(0, -1).map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-[rgb(var(--border))] hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-center text-sm font-medium"
            >
              {client.name}
            </a>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <span className="text-[rgb(var(--muted))] text-sm font-medium">
            Many many more...
          </span>
        </div>
      </div>
    </section>
  )
}