import TestimonialHeader from "./TestimonialHeader"
import TestimonialCard from "./TestimonialCard"

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <TestimonialHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah Jenkins"
            role="Solo Explorer, London"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAmQfUi1WFzKR3-vrtFzglGEthD88wlmuxhk0jU22K_b8JINuadCAvhAzTqqhZGpljMb52nxUu2xE56pm72aKVKGerX0PdR9rlpoajccGP_LHCFsosX8EUHPXsn6uW7Oflpcj9Eisso9wwQ890fijpSCcCKYYalQhYU5f6kQlmctUwJ1ICJIiONTMi_yMVNvOrLe5Kty69BNC7-dhNQrXnHcPivADrqqnN_K8VYsukeHH1UIU_Rv7EH4vgzeAsxoBzMGyxdVJaW0CE"
            quote="Setlinn didn't just help me find a hotel in Kyoto; it helped me find a community. I ended up having dinner with three other travelers who are now lifelong friends."
          />

          <TestimonialCard
            name="Marc Chen"
            role="Digital Nomad, Singapore"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAbhVszc35Z_-eMakHTkBDxUFuC9ZBhd1MT4Q-8tlIWJZjMdo0B9C0WIuh58NZBculHDj2ORZxqR3c8rPrttE027vM97h1Z0s286Xxu8CLY6AORzHjanA9ujwRiOq7obS994YuUB8h_yugzwuVbpsRJuwnQU5KYi_FfZGBi5b_1Mh12jUAapDfO33RNx6TAtdonKzT0cEPAIawM4PdY_TrDa625fEgCaVIPl-A336sV15HIigB-PU4SfjKL9ySIFks576EyyAFosWg"
            quote="The level of trust and transparency on this platform is unmatched. I've used dozens of apps, but Setlinn is the first one that feels like it has a soul."
          />

          <TestimonialCard
            name="Elena Rodriguez"
            role="Photographer, Madrid"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCUP2L9kKbEFkYnPU4z1hDz7zvMnMwSzmIfHj-DFSrmvwxFNGi6PutA-HvKjdyLGNT96zdOq8CaBvXqrW0w-xGtKMDWqLspMVC3dDwf30f_dohs0uTEAeU9MJZryWqpIy3X6bK-8UY_qucQu7M7wx8AyXxbrnJwRL_NpCGC4wZlb1p6Lz70U-MEDp9pg57XR6cCAMVI-KoVDWsENwWD8Rt5RqmfKEpabs7Plj9NrNhn_-cYvTdiJ9EuvJeFnxyvcmefKd-wPFoIy9Q"
            quote="Connecting with locals through Setlinn changed my photography. I was able to access places and stories I never would have found in a guidebook."
            hiddenOnMobile
          />
        </div>
      </div>
    </section>
  )
}
