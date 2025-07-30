import car from '../../../public/images/aboutpage/thecar.png'

const FirstSection = () => {
    return (

        <section className="mt-[36px]">
            <h1 className=" text-[32px] font-bold">About Classic Rides</h1>
            <p className=" mt-[16px] text-[1C140D] ">
            At Classic Rides, our journey began with a shared passion for the timeless elegance and craftsmanship of vintage automobiles. Founded in 2010 by Amelia Hayes and Ethan Carter, two lifelong enthusiasts, our company was born from a desire to share the unique experience of driving these iconic vehicles with others. What started as a small collection of meticulously restored cars has grown into a premier rental service, offering a diverse fleet of classic and vintage vehicles for enthusiasts and special occasions.
            </p>
            <img className='w-full mt-[16px] ' src={car} alt="" />
        </section>
    );
};

export default FirstSection;