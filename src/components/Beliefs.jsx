import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const beliefsObject = [
    { id: 1, title: "the holy scriptures", content: `The Holy Scriptures, Old and New Testaments, are the written Word of God, given by divine inspiration. The inspired authors
spoke and wrote as they were moved by the Holy Spirit. In this Word, God has committed to humanity the knowledge nec-
essary for salvation. The Holy Scriptures are the supreme, authoritative, and the infallible revelation of His will. They are the
standard of character, the test of experience, the definitive revealer of doctrines, and the trustworthy record of God’s acts in
history. (Ps. 119:105; Prov. 30:5, 6; Isa. 8:20; John 17:17; 1 Thess. 2:13; 2 Tim. 3:16, 17; Heb. 4:12; 2 Peter 1:20, 21.)` },
    { id: 2, title: "the holy trinity", content: `There is one God: Father, Son, and Holy Spirit, a unity of three coeternal Persons. God is immortal, all-powerful, all-know-
ing, above all, and ever present. He is infinite and beyond human comprehension, yet known through His self-revelation.
God, who is love, is forever worthy of worship, adoration, and service by the whole creation. (Gen. 1:26; Deut. 6:4; Isa. 6:8;
Matt. 28:19; John 3:16 2 Cor. 1:21, 22; 13:14; Eph. 4:4-6; 1 Peter 1:2.)` },
    { id: 3, title: "the father", content: `God the eternal Father is the Creator, Source, Sustainer, and Sovereign of all creation. He is just and holy, merciful and
gracious, slow to anger, and abounding in steadfast love and faithfulness. The qualities and powers exhibited in the Son and
the Holy Spirit are also those of the Father. (Gen. 1:1; Deut. 4:35; Ps. 110:1, 4; John 3:16; 14:9; 1 Cor. 15:28; 1 Tim. 1:17; 1
John 4:8; Rev. 4:11.)` },
    { id: 4, title: "the son", content: `God the eternal Son became incarnate in Jesus Christ. Through Him all things were created, the character of God is
revealed, the salvation of humanity is accomplished, and the world is judged. Forever truly God, He became also truly hu-
man, Jesus the Christ. He was conceived of the Holy Spirit and born of the virgin Mary. He lived and experienced tempta-
tion as a human being, but perfectly exemplified the righteousness and love of God. By His miracles He manifested God’s
power and was attested as God’s promised Messiah. He suffered and died voluntarily on the cross for our sins and in our
place, was raised from the dead, and ascended to heaven to minister in the heavenly sanctuary in our behalf. He will come
again in glory for the final deliverance of His people and the restoration of all things. (Isa. 53:4-6; Dan. 9:25-27; Luke 1:35;
John 1:1-3, 14; 5:22; 10:30; 14:1-3, 9, 13; Rom. 6:23; 1 Cor. 15:3, 4; 2 Cor. 3:18; 5:17-19; Phil. 2:5-11; Col. 1:15-19; Heb. 2:9-
18; 8:1, 2.)` },
    { id: 5, title: "the holy spirit", content: `God the eternal Spirit was active with the Father and the Son in Creation, incarnation, and redemption. He is as much a
person as are the Father and the Son. He inspired the writers of Scripture. He filled Christ’s life with power. He draws and
convicts human beings; and those who respond He renews and transforms into the image of God. Sent by the Father and
the Son to be always with His children, He extends spiritual gifts to the church, empowers it to bear witness to Christ, and in
harmony with the Scriptures leads it into all truth. (Gen. 1:1, 2; 2 Sam. 23:2; Ps. 51:11; Isa. 61:1; Luke 1:35; 4:18; John 14:16-18,
26; 15:26; 16:7-13; Acts 1:8; 5:3; 10:38; Rom. 5:5; 1 Cor. 12:7-11; 2 Cor. 3:18; 2 Peter 1:21.)` },
];

export default function Beliefs() {
    return (
        <div
            className="
              grid md:grid-cols-2 place-content-between
              md:gap-6 md:flex-row bg-neutral-950 text-neutral-100 md:mx-8 p-6 md:p-9 rounded-4xl
            ">
            <TextHeader />
            <Accordion />
        </div>
    );
}

function TextHeader() {
    return (
        <div className="text-container flex flex-col place-content-between">
            <div className="">
                <h2 className="uppercase text-[1.01rem] font-bold text-neutral-500">fundamental beliefs</h2>
                <p className="text-4xl">Seventh-day Adventists accept the Bible as their only creed
                    and hold certain fundamental beliefs to be the teaching of 
                    the Holy Scriptures.
                </p>
            </div>
            <div className="">
                <div>
                  <a href="./accordion.txt" download='SDA_Fundamental_Beliefs.txt' className="bg-neutral-50 text-neutral-950 font-semibold capitalize py-4 px-10 mb-4 rounded-3xl">
                    download PDF file
                </a>
                </div>
                <p className="text-[.945rem] text-neutral-400 mt-4">
                    For the rest our beliefs click the download button above
                </p>
            </div>
        </div>
    );
}

function Accordion() {
    const [openId, setOpenId] = useState(null);
    const toggleCard = id => setOpenId(openId === id ? null : id);

    return (
        <div className="flex flex-col gap-2">
            {beliefsObject.map(b => (
                <BeliefCard 
                    key={b.id} 
                    belief={b}
                    isOpen={openId === b.id}
                    onToggle={() => toggleCard(b.id)}
                />
            ))}
        </div>
    );
}

function BeliefCard({ belief, isOpen, onToggle }) {
  return (
    <div
      className={`group transition-all duration-300 bg-neutral-900/50 border rounded-2xl overflow-hidden py-3 ${
        isOpen ? "border-neutral-50/30 bg-neutral-800/60" : "border-neutral-50/10 hover:border-neutral-50/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-6 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-medium capitalize">{belief.title}</h3>
        <div className="text-neutral-400 group-hover:text-white transition-colors">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </button>

      {/* Content Area */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-neutral-400 leading-relaxed text-sm md:text-base">
            {belief.content}
          </p>
        </div>
      </div>
    </div>
  );
}

