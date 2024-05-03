import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";


const Footer = () => (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col jusify-start mr-10">
          <img src={logo} alt="HooBank" className="w-[266px] h-[72px] object-contain"/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="text-white font-poppins font-medium text-[18px] lining-[27px]">{footerLink.title}</h4>
              <ul className="list-none mt-6">
                {footerLink.links.map((link, index) => (
                  <li key={index} className={`font-poppins font-normal text-[16px] lining-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0' }`}>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-dimWhite">Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
        <div className="flex flex-row md:mt-0 mt-6 gap-6"> 
          {socialMedia.map((social) => (
            <a key={social.id} href={social.link}>
              <img src={social.icon} alt={social.link} className="w-[21px] h-[21px] object-contain cursor-pointer"/>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )

export default Footer