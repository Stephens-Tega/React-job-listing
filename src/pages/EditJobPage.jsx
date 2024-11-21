import { useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditJobPage = ({ updatedJobSubmit }) => {
    const job = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState(job.title);
    const [type, setType] = useState(job.type);
    const [location, setLocation] = useState(job.location);
    const [description, setDescription] = useState(job.description);
    const [salary, setSalary] = useState(job.salary);
    const [companyName, setCompanyName] = useState(job.company.companyName);
    const [companyDescription, setCompanyDescription] = useState(job.company.companyDescription);
    const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
    const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

    const submitForm = (e) => {
        e.preventDefault();

        const updatedJob ={
            id,
            title,
            type,
            location,
            description,
            salary,
            company: {
                companyName: companyName,
                companyDescription: companyDescription,
                contactEmail,
                contactPhone,
            }
        }
        
        updatedJobSubmit(updatedJob);

        toast.success('Job updated Successfully');

        return navigate(`/add-jobs/${id}`);
    };

  return (
    <section className="bg-indigo-100">
        <div className="container m-auto max-w-2xl py-14">
            <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <nav class="bg-indigo-500 border border-red-900 mb-9 flex justify-center px-2 py-4 rounded-full">
              <h2 class="text-white text-2xl font-bold"> Update Job Posting</h2>
            </nav>

                <form onSubmit={submitForm}>

                    <div className="mb-4">
                        <label 
                          htmlFor="type"
                          className="block text-gray-700 font-bold mb-2"
                          >Job Type</label>

                          <select 
                          name="type" 
                          id="type"
                          className=" bg-gray-500 text-white border rounded-full w-full py-3 px-3 font-bold"
                          required
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                          >
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Remote">Remote</option>
                            <option value="Internship">Internship</option>
                          </select>
                    </div>

                    <div className="mb-4">
                        <label 
                          htmlFor=""
                          className="block text-gray-700 font-bold mb-2"
                          >Job Listing Name
                          </label>
                          <input 
                           type="text"
                           id='title'
                           name='title'
                           className="border rounded-full w-full py-3 px-3 mb-2 font-bold"
                           placeholder="eg. Beautiful Apartment In Miami"
                           required
                           value={title}
                          onChange={(e) => setTitle(e.target.value)} />

                           <div className="mb-4">
                            <label 
                            htmlFor="description"
                            className="block text-gray-700 font-bold mb-2"
                            >Description 
                            </label>
                            <textarea 
                            name="description" 
                            id="description"
                            className="border rounded w-full py-3 px-3 font-bold" 
                            rows="4"
                            placeholder="Add any job duties, expectations, requirements, e.t.c"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                           </div>

                           <div className="mb-4">
                            <label 
                             htmlFor="type"
                             className="block text-gray-700 font-bold mb-2"
                             >Salary
                             </label>

                             <select 
                             name="salary"
                              id="salary"
                              className="border rounded-full w-full py-3 px-3 bg-gray-500 font-bold text-white"
                              required
                              value={salary}
                              onChange={(e) => setSalary(e.target.value)}
                              >
                                <option value="Under $50K">Under $50K</option>
                                <option value="$50K - $60K">$50K - $60K</option>
                                <option value="$60K - $70K">$60K - $70K</option>
                                <option value="$70K - $80K">$70K - $80K</option>
                                <option value="$80K - $90K">$80K - $90K</option>
                                <option value="$90K - $100K">$90K - $100K</option>
                                <option value="$100K - $125K">$100K - $125K</option>
                                <option value="$125K - $150K">$125K - $150K</option>
                                <option value="$150K - $175K">$150K - $175K</option>
                                <option value="$175K - $200K">$175K - $200K</option>
                                <option value="Over $200K">Over $200K</option>
                              </select>
                           </div>

                           <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Location
                            </label>
                            <input 
                            type="text" 
                            id="location"
                            name="location"
                            className="font-bold border rounded-full w-full  py-3 px-3 mb-2"
                            placeholder="Company Location"
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)} />
                           </div>

                           <h3 className="text-2xl mb-5 ">Company Info</h3>

                           <div className="mb-4">
                            <label 
                            htmlFor="company"
                            className="block text-gray-700 font-bold mb-2"
                            >
                                Company Name
                            </label>
                            <input 
                            type="text"
                            id="company"
                            name="company"
                            className="border rounded-full w-full py-3 px-3 font-bold"
                            placeholder="Company Name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)} />
                           </div>

                           <div className="mb-4">
                            <label 
                            htmlFor="company_description"
                            className="block text-gray-700 font-bold mb-2"
                            >
                                Company Description
                            </label>
                            <textarea 
                            name="company_description"
                             id="company_description"
                              className="border rounded w-full py-3 px-3 font-bold"
                               rows="4"
                               placeholder="What does your company do ?"
                               value={companyDescription}
                               onChange={(e) => setCompanyDescription(e.target.value)}
                               ></textarea>
                           </div>

                           <div className="mb-4">
                            <label 
                            htmlFor="contact_email"
                            className="block text-gray-700 font-bold mb-2"
                            >
                                Contact Email
                            </label>
                            <input 
                            type="email"
                            id="contact_email"
                            className="border rounded-full w-full py-3 px-3 font-bold"
                            placeholder="Email address for applicants"
                            required
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)} />
                           </div>

                           <div className="mb-4">
                            <label 
                            htmlFor="contact_phone"
                            className="block text-gray-700 font-bold mb-2"
                            >
                                Contact Phone
                            </label>
                            <input 
                            type="tel"
                            id="contact_phone"
                            name="contact_phone"
                            className="border rounded-full w-full py-3 px-3 font-bold"
                            placeholder="Optional phone for applicants"
                            required
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)} />
                           </div>

                           <div>
                            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 mt-6 rounded-full w-full focus:outline-none focus:shadow-outline"
                            type='submit'
                            >
                            Update Job
                            </button>
                           </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default EditJobPage