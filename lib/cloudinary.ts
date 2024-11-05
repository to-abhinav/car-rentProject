import { SelectCar } from "@/db/schema"

export const getCarImagePublicId = (bodyStyle: SelectCar["bodyStyle"]) => {
  switch (bodyStyle) {
    case "hatchback":
      return "https://res.cloudinary.com/dlkre2bxo/image/upload/v1730813768/Tata-Altroz-iTurbo.jpg_occyyu.jpg"

    case "minivan":
      return "https://res.cloudinary.com/dlkre2bxo/image/upload/v1730814589/cambo-auto-CHNoqIW7pfY-unsplash-1536x1024_rtqjwm.jpg"

    case "sedan":
      return "https://res.cloudinary.com/dlkre2bxo/image/upload/v1730814890/front-left-side-47_nd2nob.jpg"

    case "sports-car":
      return "https://res.cloudinary.com/dlkre2bxo/image/upload/v1730815171/kahl-orr-MPdl02hySb0-unsplash_uyvybj.jpg"

    case "pickup-truck":
      return "https://res.cloudinary.com/dlkre2bxo/image/upload/v1730815265/001_2_acbhlf.jpg"

    case "suv":
      return "https://res.cloudinary.com/dlkre2bxo/image/upload/v1730815336/Land-Rover-Range-Rover-Evoque-1110x577_behgzy.jpg"

    default:
      return null
  }
}
