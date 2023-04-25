import { useEffect, useState } from 'react';
import { copy, linkIcon, loader, tick } from './assets';

export default function Demo() {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });
  function handleSubmit(e) {
    e.preventDefault();
    alert('sadfgf');
  }

  return (
    <section className=" mt-8 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="relative flex justify-center items-center"
        >
          <img
            src={linkIcon}
         
            alt="link_icon "
            className="absolute left-0 my-5 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter Url"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 
peer-focus:text-gray-700  "
          >
            <span className="w-fit ">Submit</span>
          </button>
        </form>
      </div>
    </section>
  );
}
