export default function Footer() {
  return (
    <footer className="section pt-16">
      <div className="container flex justify-between text-sm text-[rgb(var(--muted))]">
        <span>© {new Date().getFullYear()} Kokodev</span>
        <div className="flex gap-6">
          <a href="https://shop.kokodev.cc/tos" target="_blank">Privacy</a>
          <a href="https://shop.kokodev.cc/tos" target="_blank">Terms</a>
          <a href="https://1minrelay.kokodev.cc" target="_blank">Nodes Uptime</a>
          <a href="https://donate.stripe.com/00w4gB1NbdI60afcKPgMw00" target="_blank">Donate</a>
        </div>
      </div>
    </footer>
  )
}
