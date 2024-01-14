import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'vantuan.nguyen@lqdtu.edu.vn',
    href: 'mailto:vantuan.nguyen@lqdtu.edu.vn',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/vantuannguyenlqd',
    href: 'https://www.linkedin.com/in/vantuannguyenlqd',
  },
  {
    social: 'GitHub',
    link: 'github.com/dino-chiio',
    href: 'https://github.com/dino-chiio',
  },
  {
    social: 'Google Scholar',
    link: 'scholar.google.com/<vantuannguyen>',
    href: 'https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=AH70aAXdHGg12b__q8akBRQpP-IpDEJmyBpm_733CAfN6TMb8fhZMYdQj11KMb6TGwgLdUN1b3bedcWICJnIkA&user=XfHi20YAAAAJ',
  },
  {
    social: 'Website',
    link: 'dino-chiio.dev',
    href: 'https://dino-chiio.dev',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>production</a>
        </p>
      <p className={styles.line}>
        <span>Tuan</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
