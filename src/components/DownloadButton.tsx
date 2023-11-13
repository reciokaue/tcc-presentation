'use client'

import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { Download } from "lucide-react";

export function DownloadButton() {
  const [downloaded, setDownloaded] = useState(false);
  const { toast } = useToast()

  const handleDownload = async () => {
    try {
      const response = await fetch("/TCC.pdf");
      const blob = await response.blob();

      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = "TCC-Repressão dos trabalhadores e jovens de Sorocaba";
      document.body.appendChild(downloadLink);
      downloadLink.click();

      document.body.removeChild(downloadLink);
      setDownloaded(true);
      toast({
        title: "Download concluído!",
        description: "Muito obrigado por nos ajudar",

      })
    } catch (error) {
      console.error('Error downloading media', error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="flex gap-2 font-medium uppercase text-white justify-center items-center w-full bg-gradient-to-r from-brand to-gradient"
    >
      {downloaded? "Download concluído": "Fazer download"}
      <Download size={24}/>
    </button>  
  );
};