import texts from '../languages/english.json';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 w-full h-12 bg-green-900 flex justify-center items-center py-10 px-4'>
      <p className='text-center'>
        <span className='font-bold'>{texts.Footer.p.span}</span>
        {texts.Footer.p.content}
      </p>
    </footer>
  );
};

export default Footer;
