import {FaBoxOpen,FaTags,FaSyncAlt} from 'react-icons/fa';

function Features() {
    return (
        <>
            <section className="row text-center mb-5">
                <div className="col-md-4">
                    <h3 className="text-secondary"><FaBoxOpen className="mb-2" /> Save Prompts</h3>
                    <p>Capture your most used prompts with one click. Never lose a great idea again.</p>
                </div>
                <div className="col-md-4">
                    <h3 className="text-secondary"><FaTags className="mb-2" /> Tag & Categorize</h3>
                    <p>Organize prompts with tags and categories that make sense to you.</p>
                </div>
                <div className="col-md-4">
                    <h3 className="text-secondary"><FaSyncAlt className="mb-2" /> Reuse in Seconds</h3>
                    <p>Insert your prompts instantly into ChatGPT with one click from the extension.</p>
                </div>
            </section>
            <p><i>Screenshots to come. Possibly make a slide show</i></p>
        </>

    );
}

export default Features;