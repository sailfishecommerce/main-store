import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import Applayout from "@/layouts/Applayout";
import breadcrumb from '@/json/breadcrumb.json'

export default function account() {
  return (
    <Applayout title="Account Details">
      <Breadcrumb breadcrumbItems={breadcrumb.account} />
      <main className="container mx-auto">
        <h1 className="text-2xl font-bold mt-8">My Account</h1>
        
      </main>   
    </Applayout>
  );
}