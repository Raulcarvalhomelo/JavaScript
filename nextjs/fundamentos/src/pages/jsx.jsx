import Link from "next/link"


export default function Jsx(){
    const titulo =<h1> constante  </h1>

    function subtitulo() {
        return <h2>{"função".toUpperCase()}</h2>
    }


    return(
        <div>
            <Link href="/">Voltar</Link>
            {titulo} {/*pode definir uma constante e colocar usar como chave e refericiar funcões */}
            {subtitulo()}
            <p>
                {"muito legal".toUpperCase()} {/* para usar javascript e preciso colocar entre chaves*/}
            </p>
        </div>
    )
}