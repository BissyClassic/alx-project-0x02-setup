import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return(
    <div className="flex flex-col h-screen">
    <Header />
    <main className="flex items-center justify-between bg-blue-300 font-italic-bold">
   <div className="text-center">
  <h1 className="font-bold text-white">
    Hi, welcome to the number one fashion page.</h1>
  <p>
    Enjoy your experience.
  </p>
   </div>
    </main>
    </div>
  )
}

  export default  Home;
