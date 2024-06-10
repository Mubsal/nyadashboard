import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
 
const breadcrumbItems = [{ title: "Boka samtal", link: "/dashboard/video" }];
 
function Page() {
  return (
    <>
      <ScrollArea className="h-full overflow-auto">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex flex-col items-center">
            <Heading
              title="Boka tid"
              description="Möt vår erfarna specialpedagog, som med sina 17 års erfarenhet i skolvärlden, är dedikerad till att ge elever med diagnoser möjligheten till en likvärdig skolgång. Boka en tid för att få skräddarsytt stöd och förbättra din studieteknik."
            />
          </div>
 
          {/* Image added from external URL */}
          <div className="flex justify-center">
            <img src="https://formd.se/____impro/1/onewebmedia/os_0091_4_8.png" alt="Icon" className="w-45 h-48 mb-4" />
          </div>
 
          {/* Text and booking button */}
          <div className="flex flex-col items-center text-center px-4">
            <p>Boka ett möte med en specialpedagog för att få skräddarsytt stöd och hjälp.</p>
            <p>Här är vad du behöver göra:</p>
            <ol className="list-decimal list-inside mb-4">
              <li>Klicka på knappen nedan för att fortsätta till en säker inloggningssida.</li>
              <p>Du behöver logga in igen med samma inloggning. Vi använder förstärkta säkerhetsåtgärder för videosamtal.</p>
              <li>Efter inloggning väljer du 'Boka tid'. Du kommer då få en länk som du kopierar.</li>
              <li>Använd denna länk för att ansluta till mötet. Din specialpedagog kommer att ansluta kort därefter.</li>
              <strong>Vid frågor kontakta oss på boka@formd.se</strong>
            </ol>
            <a href="https://formdbetavideo.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Boka Samtal
              </button>
            </a>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
 
export default Page;