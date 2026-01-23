import StarRating from "./StarRating"

interface TestimonialProps {
  name: string
  role: string
  image: string
  quote: string
  hiddenOnMobile?: boolean
}

export default function TestimonialCard({
  name,
  role,
  image,
  quote,
  hiddenOnMobile = false,
}: TestimonialProps) {
  return (
    <div
      className={`p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-8 ${
        hiddenOnMobile ? "hidden lg:flex" : ""
      }`}
    >
      {/* User */}
      <div className="flex items-center gap-4">
        <div
          className="size-14 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div>
          <h4 className="font-bold text-lg leading-tight">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="text-xl italic font-medium leading-relaxed">
        “{quote}”
      </p>

      {/* Rating */}
      <StarRating />
    </div>
  )
}
