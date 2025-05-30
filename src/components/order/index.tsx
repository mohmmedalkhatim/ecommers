function Orders ({ images }: { images: string[] }) {
  return (
    <div className='orders'>
      {images.map((item, i) => (
        <div style={{ zIndex: i+1 }} className="order" key={i}>
          <img src={item} alt='' />
        </div>
      ))}
    </div>
  );
}
export default Orders;
