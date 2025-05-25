type commit_props = {
  name: string;
  image: string;
  content: string;
};

function Commit ({ name, image, content }: commit_props) {
  return (
    <div className='commit_container'>
      <div className='flex items-center '>
        <div className={`commit_img bg-[url(${image})]`} />
        <div className="text-sm">
            {name}
        </div>
      </div>
      <div className='w-[80%]'>{content}</div>
    </div>
  );
}
export default Commit;
