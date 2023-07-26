import { WorkItem } from './WorkItem';

const data=[
    {
        year: '2017',
        title:"Content Creator",
        durations: "3 years",
        details:"lorem ipsum dolor sit amet lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor"
    },
    {
        year: '2017',
        title:"Content Creator",
        durations: "3 years",
        details:"lorem ipsum dolor sit amet lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor"
    },
    {
        year: '2017',
        title:"Content Creator",
        durations: "3 years",
        details:"lorem ipsum dolor sit amet lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor"
    },
    {
        year: '2017',
        title:"Content Creator",
        durations: "3 years",
        details:"lorem ipsum dolor sit amet lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor"
    },
    {
        year: '2017',
        title:"Content Creator",
        durations: "3 years",
        details:"lorem ipsum dolor sit amet lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor"
    },
    {
        year: '2017',
        title:"Content Creator",
        durations: "3 years",
        details:"lorem ipsum dolor sit amet lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor"
    },
];

export const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {
            data?.map((item,index)=>(
                <WorkItem key={index} workData={item}/>
            ) 
          )
        }
    </div>
  )
}
