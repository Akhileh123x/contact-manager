import Image from "next/image";


export default function Home() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-baseline bg-white-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Contact Manager
        </h1>

        <p className="text-gray-600 mb-6">
          Manage your contacts easily and securely.
        </p>

        <div className="flex justify-center">
          <Image 
          src="/contact-Manager.png"
          alt="Contact Manage Illustration"
          width={400}
          height={400}/>

        </div>
      </div>
    </main>
  );
}