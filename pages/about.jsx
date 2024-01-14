import { pdfjs, Document, Page } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './Resume.pdf';

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3><br/>
      <ul>
        <li><span role="img" aria-label="book">📖</span> Master Student in Information Science @ <a href='https://www.jaist.ac.jp/english/'>Japan Advanced Institute of Science and Technology</a>.</li>
        <li><span role="img" aria-label="graduate-hat">🎓</span> Conducting research on <b>AI</b> and <b>Artificial Intelligence and Cyber Security</b> @ <a href='https://www.jaist.ac.jp/english/laboratory/ngdi/beuran.html'>Cyber Security Lab</a>.</li>
        <li><span role="img" aria-label="laptop">💻</span> Currently building Federated Learning Schemes for Cyber Anomaly Detection </li>
      </ul>
      <br/>
      <center>
        <h3>Resume (<a href={myResume} download="">Download</a>)</h3>
        <br />
        <Document file={myResume}>
          <Page pageIndex={0} renderMode="svg"/>
          <Page pageIndex={1} renderMode="svg"/>
          <Page pageIndex={2} renderMode="svg"/>
        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
