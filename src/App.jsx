import React, {useState} from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ChevronDown, ExternalLink, Globe2, Mail, Menu, X, Database, Search, FileText, Megaphone, ShieldCheck, Layers3, Building2 } from 'lucide-react'

const company = {
  legalName: 'MOOVNG SERVICOS E TECNOLOGIA LTDA',
  tradeName: 'MOOVNG',
  cnpj: '47.952.562/0001-07',
  opening: '14/09/2022',
  nature: 'Sociedade Empresária Limitada',
  activity: '63.19-4-00 — Portais, provedores de conteúdo e outros serviços de informação na internet',
  location: 'São Paulo/SP, Brasil'
}

const services = [
  {icon: Globe2, title:'Portais e plataformas web', text:'Estruturação de ambientes digitais para publicação, organização e acesso a informações na internet.'},
  {icon: Search, title:'Busca e descoberta de conteúdo', text:'Soluções digitais voltadas à organização e localização de informações e conteúdos disponibilizados online.'},
  {icon: Database, title:'Bases de dados e informação', text:'Organização e apresentação de informações digitais em estruturas que facilitem consulta e navegação.'},
  {icon: FileText, title:'Conteúdo digital', text:'Estruturas para publicação, gestão e apresentação de conteúdo em ambientes digitais.'},
  {icon: Megaphone, title:'Publicidade na internet', text:'Recursos e ambientes digitais relacionados à divulgação de conteúdo e informações na internet.'},
  {icon: Layers3, title:'Serviços digitais', text:'Desenvolvimento e operação de recursos digitais compatíveis com o escopo da atividade empresarial.'},
]

function Layout({children}) {
  const [open,setOpen] = useState(false)
  const loc = useLocation()
  const nav = [['Início','/'],['Sobre','/sobre'],['Serviços','/servicos'],['Contato','/contato']]
  return <div className="site">
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand" onClick={()=>setOpen(false)}><span className="brandMark">M</span><span>MOOVNG</span></Link>
        <button className="menuBtn" aria-label="Abrir menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
        <nav className={open?'navLinks open':'navLinks'}>
          {nav.map(([label,path])=><Link key={path} className={loc.pathname===path?'active':''} onClick={()=>setOpen(false)} to={path}>{label}</Link>)}
        </nav>
        <Link className="navCta" to="/contato">Fale conosco <ArrowRight size={16}/></Link>
      </div>
    </header>
    <main>{children}</main>
    <footer className="footer">
      <div className="container footerGrid">
        <div><Link to="/" className="brand footerBrand"><span className="brandMark">M</span><span>MOOVNG</span></Link><p>Serviços e soluções digitais para portais, conteúdo e informação na internet.</p></div>
        <div><h4>Empresa</h4><Link to="/sobre">Sobre a MOOVNG</Link><Link to="/servicos">Serviços</Link><Link to="/contato">Contato</Link></div>
        <div><h4>Transparência</h4><Link to="/politica-de-privacidade">Política de privacidade</Link><Link to="/termos-de-uso">Termos de uso</Link></div>
        <div><h4>Dados cadastrais</h4><span>{company.legalName}</span><span>CNPJ {company.cnpj}</span><span>{company.location}</span></div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} MOOVNG. Todos os direitos reservados.</div>
    </footer>
  </div>
}

function Hero(){
 return <section className="hero"><div className="container heroGrid">
   <div>
    <span className="eyebrow">TECNOLOGIA • CONTEÚDO • INFORMAÇÃO</span>
    <h1>Construímos experiências digitais para a <em>internet.</em></h1>
    <p className="lead">A MOOVNG atua no desenvolvimento e estruturação de ambientes digitais voltados a portais, conteúdo e informação online.</p>
    <div className="actions"><Link className="btn primary" to="/servicos">Conheça nossos serviços <ArrowRight size={18}/></Link><Link className="btn secondary" to="/sobre">Conheça a empresa</Link></div>
    <div className="trust"><CheckCircle2 size={18}/><span>Empresa identificada e informações cadastrais disponíveis neste site.</span></div>
   </div>
   <div className="heroCard"><div className="orb"></div><div className="network"><span></span><span></span><span></span><span></span><span></span></div><div className="heroCardText"><small>MOOVNG</small><strong>Informação conectada.</strong><p>Ambientes digitais pensados para organizar, publicar e disponibilizar conteúdo.</p></div></div>
 </div></section>
}

function Home(){
 return <>
  <Hero/>
  <section className="section"><div className="container">
   <div className="sectionHead"><div><span className="eyebrow">ATUAÇÃO</span><h2>Serviços digitais com foco em informação</h2></div><Link to="/servicos" className="textLink">Ver todas as áreas <ArrowRight size={16}/></Link></div>
   <div className="cards">{services.slice(0,3).map(S=><ServiceCard key={S.title} {...S}/>)}</div>
  </div></section>
  <section className="darkSection"><div className="container twoCol"><div><span className="eyebrow light">SOBRE A MOOVNG</span><h2>Uma empresa digital com atuação definida.</h2></div><div><p>O site apresenta de forma objetiva a empresa, seus dados cadastrais e as áreas de atuação compatíveis com sua atividade econômica principal.</p><Link to="/sobre" className="btn outline">Conhecer a MOOVNG <ArrowRight size={17}/></Link></div></div></section>
  <section className="section"><div className="container">
    <div className="sectionHead"><div><span className="eyebrow">TRANSPARÊNCIA</span><h2>Informações claras para quem acessa</h2></div></div>
    <div className="infoGrid"><Info title="Identidade empresarial" text="Razão social, nome fantasia, CNPJ e informações cadastrais são apresentados de forma direta."/><Info title="Escopo de atuação" text="As áreas descritas são apresentadas como compatíveis com o CNAE informado, sem prometer serviços que não estejam efetivamente disponíveis."/><Info title="Navegação simples" text="Sem pop-ups invasivos, redirecionamentos automáticos ou páginas intermediárias criadas apenas para encaminhar o usuário."/><Info title="Privacidade" text="Consulte a política de privacidade para entender os princípios adotados no tratamento de dados."/>
    </div>
  </div></section>
 </>
}

function Info({title,text}){return <div className="info"><CheckCircle2 size={20}/><div><h3>{title}</h3><p>{text}</p></div></div>}
function ServiceCard({icon:Icon,title,text}){const [open,setOpen]=useState(false);return <article className="serviceCard"><div className="iconBox"><Icon size={22}/></div><h3>{title}</h3><p>{text}</p><button onClick={()=>setOpen(!open)}>{open?'Ocultar observação':'Ver observação'} <ChevronDown size={16} className={open?'rotate':''}/></button>{open&&<div className="note">Esta descrição representa uma área compatível com o CNAE principal informado. A disponibilidade concreta de cada serviço deve ser confirmada diretamente com a empresa.</div>}</article>}

function PageHero({eyebrow,title,text}){return <section className="pageHero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>}

function About(){
 return <><PageHero eyebrow="A EMPRESA" title="Sobre a MOOVNG" text="Conheça a empresa, sua identificação cadastral e o escopo de atuação apresentado neste site."/>
 <section className="section"><div className="container aboutGrid"><div><span className="eyebrow">IDENTIDADE</span><h2>MOOVNG SERVICOS E TECNOLOGIA LTDA</h2><p>A MOOVNG é uma empresa registrada no Brasil, com atuação empresarial relacionada a portais, provedores de conteúdo e outros serviços de informação na internet.</p><p>Este site tem caráter institucional e informativo. As áreas de serviços apresentadas descrevem possibilidades compatíveis com a atividade econômica principal informada e não substituem uma proposta comercial específica.</p></div>
 <div className="companyBox"><h3>Dados cadastrais</h3><dl><dt>Razão social</dt><dd>{company.legalName}</dd><dt>Nome fantasia</dt><dd>{company.tradeName}</dd><dt>CNPJ</dt><dd>{company.cnpj}</dd><dt>Início da atividade</dt><dd>{company.opening}</dd><dt>Natureza jurídica</dt><dd>{company.nature}</dd><dt>Atividade principal</dt><dd>{company.activity}</dd><dt>Localização</dt><dd>{company.location}</dd></dl></div></div></section>
 <section className="lightBand"><div className="container"><div className="sectionHead"><div><span className="eyebrow">PRINCÍPIOS</span><h2>Como apresentamos nosso trabalho</h2></div></div><div className="infoGrid"><Info title="Clareza" text="Informações institucionais e de contato devem ser apresentadas sem omissões relevantes."/><Info title="Coerência" text="O conteúdo do site deve corresponder ao que a empresa efetivamente oferece."/><Info title="Responsabilidade" text="Não utilizamos identidade, marcas ou afiliações de terceiros sem autorização ou base factual."/><Info title="Experiência" text="O visitante encontra conteúdo e navegação úteis desde a primeira página."/></div></div></section></>
}

function Services(){
 return <><PageHero eyebrow="SERVIÇOS" title="Áreas de atuação digital" text="Conheça as principais áreas compatíveis com a atividade econômica informada pela MOOVNG."/>
 <section className="section"><div className="container"><div className="cards full">{services.map(S=><ServiceCard key={S.title} {...S}/>)}</div><div className="scope"><ShieldCheck size={23}/><div><strong>Importante sobre o escopo</strong><p>As descrições acima são institucionais e baseadas no escopo do CNAE principal informado. Elas não significam que todos os serviços estejam disponíveis ao mesmo tempo ou que exista uma oferta comercial específica para cada item.</p></div></div></div></section></>
}

function Contact(){
 const [sent,setSent]=useState(false)
 return <><PageHero eyebrow="CONTATO" title="Fale com a MOOVNG" text="Entre em contato para informações institucionais, comerciais ou sobre as soluções digitais da empresa."/>
 <section className="section"><div className="container contactGrid"><div><span className="eyebrow">ATENDIMENTO</span><h2>Vamos conversar.</h2><p>Envie uma mensagem pelo formulário. Antes de publicar o site, substitua o comportamento demonstrativo abaixo por um canal de contato real da empresa.</p><div className="contactItem"><Building2/><div><strong>MOOVNG SERVICOS E TECNOLOGIA LTDA</strong><span>CNPJ {company.cnpj}</span><span>{company.location}</span></div></div><div className="contactItem"><Mail/><div><strong>Canal de atendimento</strong><span>Configure aqui o e-mail ou outro canal oficial da empresa antes da publicação.</span></div></div></div>
 <form className="form" onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Nome<input required name="name" autoComplete="name" placeholder="Seu nome"/></label><label>E-mail<input required type="email" name="email" autoComplete="email" placeholder="seu@email.com"/></label><label>Assunto<input required name="subject" placeholder="Como podemos ajudar?"/></label><label>Mensagem<textarea required name="message" rows="6" placeholder="Escreva sua mensagem"></textarea></label><button className="btn primary" type="submit">{sent?'Mensagem registrada neste formulário':'Enviar mensagem'} <ArrowRight size={17}/></button>{sent&&<div className="success"><CheckCircle2 size={18}/> Este formulário está em modo demonstrativo e não envia dados para um servidor.</div>}</form></div></section></>
}

function Legal({type}){
 const privacy=type==='privacy'
 return <><PageHero eyebrow="TRANSPARÊNCIA" title={privacy?'Política de Privacidade':'Termos de Uso'} text="Informações institucionais sobre o uso deste site."/>
 <section className="section legal"><div className="container narrow">
 {privacy?<><h2>1. Objetivo</h2><p>Esta página apresenta, de forma geral, os princípios de privacidade aplicáveis ao site institucional da MOOVNG.</p><h2>2. Dados enviados pelo visitante</h2><p>O formulário de contato desta versão é demonstrativo e não transmite os dados para um servidor. Caso um canal real seja conectado, esta política deverá ser atualizada para descrever exatamente os dados coletados, a finalidade, a base legal, o prazo de retenção e os direitos do titular.</p><h2>3. Cookies e tecnologias</h2><p>Esta versão não utiliza mecanismos próprios de rastreamento para criar perfis de usuários. Serviços de terceiros eventualmente adicionados ao projeto deverão ser documentados nesta política quando aplicável.</p><h2>4. Contato</h2><p>Os canais oficiais de atendimento devem ser informados nesta página quando o site for colocado em produção.</p></>
 :<><h2>1. Uso do site</h2><p>O conteúdo deste site possui finalidade institucional e informativa. O acesso deve ser realizado de forma lícita e responsável.</p><h2>2. Informações sobre serviços</h2><p>As áreas apresentadas descrevem possibilidades compatíveis com a atividade empresarial informada. A disponibilidade, escopo, preço e condições de qualquer serviço devem ser confirmados diretamente com a empresa.</p><h2>3. Propriedade intelectual</h2><p>Textos, elementos visuais e estrutura deste site devem ser utilizados respeitando os direitos aplicáveis. Marcas de terceiros não são apresentadas como se fossem propriedade ou afiliação da MOOVNG.</p><h2>4. Atualizações</h2><p>O conteúdo institucional pode ser atualizado para refletir alterações cadastrais, operacionais ou legais.</p></>}
 </div></section></>
}

function App(){
 return <Layout><Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/sobre" element={<About/>}/>
   <Route path="/servicos" element={<Services/>}/>
   <Route path="/contato" element={<Contact/>}/>
   <Route path="/politica-de-privacidade" element={<Legal type="privacy"/>}/>
   <Route path="/termos-de-uso" element={<Legal type="terms"/>}/>
 </Routes></Layout>
}
export default App
