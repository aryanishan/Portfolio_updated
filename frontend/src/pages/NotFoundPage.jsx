import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'

function NotFoundPage() {
  return (
    <PageShell eyebrow="404" title="This route does not exist." description="The page you are looking for was not found in the portfolio.">
      <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-black">
        Return home
      </Link>
    </PageShell>
  )
}

export default NotFoundPage
