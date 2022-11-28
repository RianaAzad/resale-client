import React from 'react';

const Blog = () => {
    return (
        <div className='m-3 md:p-8 text-justify'>
            <div className='border border-purple-400 rounded p-3 bg-slate-900'>
                What are the different ways to manage a state in a React application?
            </div>
            <div className='border border-purple-400 rounded p-3 bg-slate-800'>
                The Four Kinds of React State to Manage
                When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                There are four main types of state you need to properly manage in your React apps:

                Local state
                Global state
                Server state
                URL state
                Let's cover each of these in detail:

                Local (UI) state – Local state is data we manage in one or another component.

                Local state is most often managed in React using the useState hook.
                Global (UI) state – Global state is data we manage across multiple components.

                Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                Server state – Data that comes from an external server that must be integrated with our UI state.

                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                URL state – Data that exists on our URLs, including the pathname and query parameters.

                URL state is often missing as a category of state, but it is an important one.
            </div>
            <div className='border border-purple-400 rounded p-3 bg-slate-900'>
                How does prototypical inheritance work?
            </div>
            <div className='border border-purple-400 rounded p-3 bg-slate-800'>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
            </div>
            <div className='border border-purple-400 rounded p-3 bg-slate-900'>
                What is Unit test? Why Should we write unit test?
            </div>
            <div className='border border-purple-400 rounded p-3 bg-slate-800'>
                Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.

                Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.
                There are two types of unit testing:

                Manual: As the name implies, unit tests are run manually to verify the correctness of your code. This is done before writing automated tests. Its drawback is that you have to manually test your functions/classes whenever you make changes to them.
                Automated: This is the preferred unit testing method as it can be carried out by simply running a script. Automated tests also make it easier to run tests when your application scales.
            </div>
            <div className='border border-purple-400 rounded p-3 bg-slate-900'>
                React vs Angular vs Vue
            </div>
            <div className='border border-purple-400 rounded p-3 bg-slate-800'>
                Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as:

                “The modern web developer’s platform”

                It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.



                React is considered a UI library. They define themselves as:

                “A JavaScript library for building user interfaces”

                Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.



                Last but not least, Vue.js is, according to its site:

                “A progressive JavaScript framework”

                Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.



                These three frameworks have several things in common, such as each follows a component-based architecture and allows creating UI features quickly. React and Vue.js are mainly declarative, and while Angular could also be declarative, it’s really more imperative. Nevertheless, they present some more differences according to their structure, architecture and way of working, so let’s dive into all these characteristics.
            </div>
        </div>
    );
};

export default Blog;