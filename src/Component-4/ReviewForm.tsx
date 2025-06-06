import CustomInput from "./CustomInput";
import Review from "./Review";

const ReviewForm = () => {
  return (
    <div className="w-[42rem] space-y-8 rounded-3xl bg-white  p-16">
      <h1 className="font-meri text-2xl font-black">Overall rating</h1>

      <div>
        <Review />
        <p className="text-sm font-normal">Click to rate</p>
      </div>

      <CustomInput
        title="Review title"
        placeholder="Write your review here..."
        type="text"
      />

      <p>Would you like to recommend this product to a friend?</p>
      <div className="flex gap-8">
        <div className="cursor-pointer">
          <input
            className="mr-2 scale-150 accent-[#121633]"
            type="radio"
            id="yes"
            name="fav"
            value="yes"
          />
          <label htmlFor="yes" className="cursor-pointer">
            Yes
          </label>
        </div>
        <div>
          <input
            className="mr-2 scale-150 accent-[#121633]"
            type="radio"
            id="no"
            name="fav"
            value="no"
          />
          <label htmlFor="no" className="cursor-pointer">
            No
          </label>
        </div>
      </div>

      <CustomInput
        title="Product Review"
        placeholder="textarea story ...."
        type="textarea"
      />
      <div className="flex gap-x-2">
        <div className="grow">
          <CustomInput
            title="Nick name"
            placeholder="Write your review here..."
            type="text"
          />
        </div>
        <div className="grow">
          <CustomInput
            title="Email"
            placeholder="Write your review here..."
            type="text"
          />
        </div>
      </div>
      <div className="cursor-pointer">
        <input
          className="mr-2 scale-150 accent-[#121633]"
          type="checkbox"
          id="accept"
          name="accept"
          value="accept"
        />
        <label htmlFor="accept" className="ml-1 cursor-pointer">
          I accept terms and conditions
        </label>
      </div>
      <p className="text-sm font-medium">
        This is a sample text content. More details will be added soon. We are
        working on providing more information. Please check back later for
        updates.
      </p>
      <button className="rounded-md bg-[#121633] p-4 text-white ">
        Submit product review
      </button>
    </div>
  );
};

export default ReviewForm;
