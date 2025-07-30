import apartman  from '/images/aboutpage/the.png'
const SecondSection = () => {
    return (

        <section className="mt-[36px]">
            <h1 className=" text-[32px] font-bold">Our mission </h1>
            <p className=" mt-[16px] text-[#1C140D] ">
            Our mission is to provide an unparalleled vintage car rental experience, combining the thrill of driving a classic vehicle with exceptional customer service. We are dedicated to preserving the heritage of these automobiles, ensuring they remain in pristine condition for generations to come. Our commitment extends beyond just rentals; we aim to create memorable experiences, whether it's a weekend getaway, a special event, or a nostalgic journey.
            </p>
            <img className='w-full mt-[16px] ' src={apartman} alt="" />
        </section>
    );
};

export default SecondSection;