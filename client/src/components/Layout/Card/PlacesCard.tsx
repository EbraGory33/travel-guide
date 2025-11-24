// TODO: needs to be refactored
type PlacesCardProps = {
  id: number;
  Name: string;
  description: string;
};
export default function PlacesCard({ id, Name, description }: PlacesCardProps) {
  const saveplace = (id: number) => {
    id;
  };
  return (
    <>
      <div className="place-card">
        <div className="place-card-header">
          <p>
            {id}. {Name}
          </p>
          {/* save if not saved and Saved if saved */}
          <button className="save-btn" onClick={() => saveplace(id)}>
            Save
          </button>
        </div>

        {/* Todo: later */}
        {/* <div className="ratings"></div> */}

        <p className="place-card-description">{description}</p>

        {/* TODO: reviews for later developments*/}
        {/* <blockquote classname="review"></blockquote> */}

        {/* TODO: Later Development */}
        <div className="footer">
          {/* <span>{Location}</span> */}
          {/* <a href="">{website}</a> */}
          {/* <span>• {number or email}</span> */}
        </div>
      </div>
    </>
  );
}
