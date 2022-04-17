import HeroSection from "~/components/HeroSection"
import Navbar from "~/components/Navbar"
import Footer from "~/components/Footer"
import { useApiRoute } from "~/utils/api"

const IndexPage = () => {
  const { data: staffInLab } = useApiRoute("/lab/staff")
  return (
    <>
      <Navbar />
      <HeroSection />
      <div>
        {staffInLab && (
          <>
            <h2>Staff in Lab:</h2>
            <ul>
              {staffInLab.staff_in_lab.map((s) => (
                <li key={s.host}>
                  {s.user} on {s.host} since {s.start}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Footer />
    </>
  )
}

export default IndexPage
