import { Badge } from "../components/ui/badge";
import { tags } from "../lib/tags";
import { DownloadButton } from "../components/DownloadButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-screen  bg-brand">
      <div className="h-screen overflow-y-scroll">
        <header className="flex justify-center items-center h-80 bg-gradient-to-t from-brand to-gradient">
          <Image src="/TCC-CAPA.svg" alt="capa" height={240} width={184} />
        </header>
        <article className="flex h-full flex-col flex-1 p-6  bg-white rounded-tl-3xl rounded-tr-3xl">
          <span className="text-brand font-semibold text-xs">APOSTILA TCC</span>
          <h1 className="font-semibold text-stone-800 text-2xl">A Repressão dos trabalhadores e jovens de sorocaba</h1>
          <h2 className="mt-2 font-medium text-2xl text-brand">R$ 0,00</h2>

          <h3 className="mt-6 mb-2 text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Sobre o nosso TCC</h3>
          <p className="leading-relaxed text-md text-muted-foreground">Esta obra narra as lutas travadas por direitos democráticos em Sorocaba, com ênfase no papel fundamental dos estudantes e trabalhadores na resistência contra a repressão perpetuada pela ditadura empresarial-militar brasileira.</p>

          <div className="flex flex-col mt-8">
            <label className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Tags</label>
            <article className="flex flex-wrap gap-1 mt-2">
              {tags.map((tag) => (
                <Badge variant="outline" key={tag}>{tag}</Badge>
              ))}
            </article>
          </div>
        </article>
      </div>
      <footer className="flex h-24">
        <button className="flex  justify-center items-center bg-stone-300 w-1/3">Preview</button>
        <DownloadButton/>
      </footer>
    </main>
  )
}
