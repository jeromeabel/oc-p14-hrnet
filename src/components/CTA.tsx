type CTAProps = {
    title: string,
    href: string;
}

const CTA = ( {title, href} : CTAProps) => {
    return ( 
        <a 
            className="bg-secondary py-3 px-5 rounded-full text-xl hover:bg-primary text-white" 
            href={href} 
            title={title}>
            {title}
        </a>
    )
}

export default CTA;