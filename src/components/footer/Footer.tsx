import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Mel | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/melissa-cassia-41588921b/" target="_blank">
                        <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/meli.cs" target="_blank">
    	                        <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://github.com/melcsilva" target="_blank">
    	                        <GithubLogoIcon size={48} weight='bold' />
	                    </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer