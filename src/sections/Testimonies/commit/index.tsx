type commit_props = {
  name: string;
  image: string;
  content: string;
};

function Commit({ name, image, content }: commit_props) {
  return (
    <div className="commit_container mx-[auto]">
      <div className="flex items-center gap-4">
        <div className={`commit_img bg-[url(${image})]`} />
        <div className="h-4/5">
          <div className="text-sm">{name}</div>
        </div>
      </div>
      <div className="w-[80%]">{content}</div>
    </div>
  );
}
export default Commit;
