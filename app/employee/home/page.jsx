import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from 'next/link';

export default async function Home() {

  return (
    <main>
       <div className="grid grid-cols-4 gap-4">
       
       <Link href="/">
          <div>Employee</div>
       </Link>

       <div>Employer</div>
       </div>
      
    </main>
  );
}