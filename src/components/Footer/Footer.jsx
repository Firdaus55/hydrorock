import { contacts } from "../../constants/contacts";

const contact = contacts;

const ContentRenderer = ({ content }) => {
  if (typeof content === "object") {
    return (
      <>
        {Object.entries(content).map(([key, value]) => (
          <p key={key}>{value}</p>
        ))}
      </>
    );
  }
  return <p>{content}</p>;
};

const Footer = () => {
  return (
    <footer className="bg-blue-900">
      <div className="md:flex md:justify-between md:items-center px-10 md:px-36 py-7">
        {/* left */}
        <div className="text-white sm:basis-1/2 lg:basis-1/3 mb-10 md:mb-0">
          <h1 className="text-xl md:text-2xl font-bold w-[90%] mb-4">
            Website Hydrorock INDRUSTRIAL LINKS INTERNATIONAL PTE.LTD
          </h1>
          <div className="w-[85%] text-wrap mb-4">
            <p className="text-xs font-light ">
              Sebuah website yang memberikan informasi detail tentang produk
              Hydrorock untuk mengenalkan produk dari Belanda agar dapat
              digunakan di Indonesia sebagai sistem drainase yang sustainable,
              irigasi tanaman, atau penyimpanan air bersih bawah tanah.
            </p>
          </div>
          <div className="text-sm md:text-lg">
            <h3 className="font-bold">PANDUAN INFORMASI</h3>
            <div className="text-sm">
              <p>Panduan Pengguna</p>
              <p>Tentang Kami</p>
              <p>Kontak & Dukungan</p>
              <p>FAQ's</p>
            </div>
          </div>
          <div className="text-xs md:text-sm mt-3">
            <h3 className="font-light">
              ©️ Hydrorock 2024. Hak Cipta Dilindungi
            </h3>
          </div>
        </div>

        {/* center */}
        <div className="text-white lg:basis-1/3 lg:ps-20 mb-10 md:mb-0">
          {contact.map((item, index) => {
            return (
              <div className="my-3" key={item.title}>
                <div className="flex mb-2">
                  <img src={item.icon} alt={item.alt} className=" mx-1 pe-3" />
                  <p className=" text-sm font-semibold">{item.title}</p>
                </div>
                <div className="flex h-auto">
                  <div className="h-auto w-[1.5px] bg-white mx-3"></div>
                  <div className="text-sm ps-2">
                    <ContentRenderer content={item.content} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* right */}
        <div className="text-white lg:basis-1/3 ">
          <img
            src="src/assets/img/logo.png"
            alt="logo"
            className="lg:float-right"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
