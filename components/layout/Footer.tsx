export const Footer: React.FC = ({ children }) => {
  return (
    <div className="grid w-full grid-cols-3 px-20 m-auto mb-10 bg-white after:w-full after:m-auto after:block after:col-span-3 after:border-b after:border-b-1-black">
      <div className="py-10 text-left col-span-full lg:col-span-1 lg:text-center">
        <div>
          <a
            className="text-2xl font-bold text-gray-700 lg:text-3xl dark:hover:text-gray-300"
            href="#"
          >
            Brandes
          </a>
        </div>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae
          error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis
          optio.
        </p>
      </div>
      <div className="flex justify-start py-10 text-left lg:justify-center col-span-full md:col-span-2 lg:col-span-1">
        <div>
          <h4>Links</h4>
          <ul>
            <li>Link One</li>
            <li>Link Two</li>
            <li>Link Three</li>
            <li>Link Four</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-start py-10 text-left md:justify-center col-span-full md:col-span-1 md:text-center">
        <div>
          <h4>Contact</h4>
          <p>08123456</p>
          <p>contact contact</p>
        </div>
      </div>
    </div>
  );
};
