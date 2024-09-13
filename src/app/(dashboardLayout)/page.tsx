import { redirect } from "next/navigation";


export default function Home() {
  return redirect("/dashboard")
}

// type TTotalType = {
//   icon:ReactNode,
//   label:string,
//   value:string | number
// }
// const Total = ({icon,label,value}:TTotalType) => {
//   return <div className="bg-primary rounded-lg p-6 flex flex-col lg:flex-row items-start lg:items-center gap-6">
//   <div className="size-20 bg-info rounded-full flex items-center justify-center">
//       {icon}
//   </div>
//     <div>
//       <h2 className="text-info font-semibold text-xl">{label}</h2>
//       <h4 className={`text-info font-semibold text-2xl ${roboto.className}`}>{value}</h4>
//     </div>
//   </div>
// }