"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          id: 1,
          title: "JS Hosting",
          content: `In the ever-evolving landscape of web development, the excitement surrounding JavaScript hosting is palpable. The ability to host JavaScript opens up a myriad of possibilities for developers, ushering in a new era of dynamic and interactive web applications.
        JavaScript, originally designed as a client-side scripting language, has transcended its initial role and is now a key player in both frontend and backend development. With the advent of server-side JavaScript frameworks like Node.js, hosting JavaScript on the server side has become not just a possibility but a preferred choice for many developers.
        
        The advantages of hosting JavaScript are numerous. One of the primary benefits is the seamless integration between the frontend and backend, allowing for a unified language stack. This simplifies development workflows, as developers can use the same language, data structures, and libraries across the entire application.
        Additionally, JavaScript hosting facilitates the creation of real-time applications, enabling features such as live updates, instant messaging, and collaborative editing. This real-time capability is a game-changer for applications that require timely data synchronization and responsiveness.
        `,
          category_id: 1,
          user_id: 22654,
          status_id: 3,
          image: "javascript_image.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "Test Hosting #2",
          content: `As we delve into the dynamic realm of JavaScript hosting, the enthusiasm and possibilities are truly captivating. Hosting JavaScript open doors to a plethora of opportunities, transforming the landscape of web development.
        JavaScript, initially crafted as a client-side scripting language, has evolved far beyond its original purpose. It now plays a pivotal role in both frontend and backend development, with the emergence of server-side frameworks like Node.js. This shift has not only become a viable option but a favored one for numerous developers.
      
        The advantages of hosting JavaScript are manifold. A key benefit lies in the seamless integration between the frontend and backend, creating a unified language stack. This streamlines development workflows, enabling developers to utilize the same language, data structures, and libraries throughout the entire application.
        Moreover, JavaScript hosting empowers the creation of real-time applications, ushering in features like live updates, instant messaging, and collaborative editing. The real-time capability is a game-changer for applications requiring timely data synchronization and responsiveness.
      
        The excitement surrounding JavaScript hosting is palpable, and it undoubtedly marks a new era for dynamic and interactive web applications.
        `,
          category_id: 1,
          user_id: 2201,
          status_id: 4,
          image: "javascript_image.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "Web Frameworks",
          content: `Dive into the fascinating world of web hosting frameworks in this discussion. As an enthusiast using React, there's a genuine curiosity to explore alternatives and discover new favorites.
      
        Web development is a diverse ecosystem, and the choice of a framework significantly influences a project's trajectory. While React has proven its mettle, there's always room for exploration. Share your favorite web hosting frameworks and let's engage in a collaborative exploration of the vast landscape of web development frameworks.`,
          category_id: 2,
          user_id: 2202,
          status_id: 1,
          image: "frameworks_comparison.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "Efficient Coding Tips",
          content: `Embark on a journey of efficiency with these server-side coding tips. The discussion starts with a fundamental principle: the significance of using meaningful variable names. Clean, well-organized code is the cornerstone of efficient server-side development.
      
        As we explore coding tips, share your insights into crafting code that not only functions but is also easy to maintain and understand. What strategies do you employ for efficient server-side coding? Let's compile a repository of best practices to elevate coding standards in the server-side development community.`,
          category_id: 1,
          user_id: 2203,
          status_id: 2,
          image: "coding_tips.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: "Advanced Coding Tips",
          content: `Elevate your server-side coding prowess with advanced tips and techniques. Building on the foundation of clean coding principles, this discussion explores the nuances of writing sophisticated and efficient server-side code.
      
        Share your advanced coding tips and delve into innovative approaches for tackling complex challenges. As the server-side development landscape evolves, staying ahead of the curve becomes crucial. Let's foster a community of developers committed to pushing the boundaries of what is possible in advanced server-side coding.`,
          category_id: 1,
          user_id: 2204,
          status_id: 2,
          image: "coding_tips.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          title: "Pro Coding Tips",
          content: `Unleash the power of professional server-side coding with expert tips and strategies. Crafting code at a professional level demands a nuanced understanding of best practices, design patterns, and performance optimization.
      
        Share your pro coding tips and insights gained from real-world projects. What strategies do you employ to ensure your server-side code is not just functional but exemplary? Let's build a knowledge base that empowers developers to reach new heights in their professional coding journey.`,
          category_id: 1,
          user_id: 2205,
          status_id: 2,
          image: "coding_tips.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          title: "Top Hosting Books",
          content: `Embark on a literary exploration in search of top-notch books on server hosting. Whether you're a seasoned developer or a beginner, a good book can be a guiding light through the complexities of server hosting.
      
        Share your favorite hosting books and let fellow developers know about gems that have significantly impacted your understanding of server hosting. Let's curate a list of must-reads that can serve as valuable resources for developers at all stages of their journey.`,
          category_id: 3,
          user_id: 2206,
          status_id: 1,
          image: "programming_books.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          title: "Hosting Challenges",
          content: `Embark on a collective learning experience by sharing challenging server hosting debugging experiences. The journey of a developer is marked by overcoming obstacles, and debugging is an integral part of that process.
      
        Dive into the intricacies of hosting challenges you've encountered and conquered. By sharing your experiences, you contribute to a communal pool of knowledge, helping fellow developers navigate similar challenges. Let's learn from each other and collectively elevate our understanding of server hosting.`,
          category_id: 2,
          user_id: 2207,
          status_id: 3,
          image: "debugging_challenges.gif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          title: "Debugging Stories",
          content: `Embark on a storytelling adventure as developers share their most challenging server hosting debugging experiences. Debugging is not just about fixing issues; it's a narrative of problem-solving, resilience, and continuous improvement.
      
        Share your debugging stories and unravel the intricacies of overcoming seemingly insurmountable challenges. Through storytelling, we gain insights into different approaches and strategies for effective debugging. Let's weave a tapestry of experiences that enrich our collective understanding of server hosting.`,
          category_id: 2,
          user_id: 2208,
          status_id: 3,
          image: "debugging_challenges.gif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          title: "Update Hosting Status",
          content: `In this status update, share your recent server hosting experiences and the challenges you've overcome. Every update is a chapter in the ongoing saga of server hosting, and by sharing your status, you contribute to the evolving narrative of our collective journey.
      
        Whether you've triumphed over challenges or encountered new ones, let the community know about your latest hosting endeavors. Together, we build a dynamic and responsive network of developers navigating the ever-changing landscape of server hosting.`,
          category_id: 2,
          user_id: 2209,
          status_id: 4,
          image: "debugging_challenges.gif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          title: "Cloud JS Hosting",
          content: `Embark on an exploration of cloud-based hosting solutions for JavaScript, unlocking enhanced possibilities. The intersection of JavaScript and cloud hosting opens up a world of scalability, flexibility, and advanced features.
      
        Share your insights into the realm of cloud JS hosting and discover how leveraging cloud services can elevate your JavaScript applications. From enhanced performance to seamless scalability, let's delve into the advantages and challenges of hosting JavaScript in the cloud.`,
          category_id: 1,
          user_id: 2209,
          status_id: 3,
          image: "cloud_javascript_image.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          title: "Test Hosting #3",
          content:
            `Excitement about testing JavaScript hosting. Opens up more possibilities! This is a longer content to provide more details and insights into the testing process and its potential impact on web development. Testing is a critical aspect of software development, ensuring the reliability and functionality of applications. 

            JavaScript hosting, in particular, introduces new opportunities and challenges for developers. In this post, we'll explore the exciting world of testing in the context of JavaScript hosting, discussing key strategies, tools, and best practices to ensure robust and bug-free applications.`,
          category_id: 1,
          user_id: 22654,
          status_id: 4,
          image: "test_javascript_image.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          title: "Top Web Frameworks",
          content:
            `Explore the top web hosting frameworks. Using React? Discover other options and compare their strengths and weaknesses. This content aims to guide developers in making informed decisions when choosing a web framework for their projects. Choosing the right web framework is crucial for the success of a project. 
            React has gained popularity, but it's essential to consider alternative frameworks that may better suit specific project requirements. In this comprehensive exploration, we'll dive deep into various web frameworks, analyzing their features, performance, and community support to help you make the best decision for your next web development endeavor.
            `,
          category_id: 2,
          user_id: 2208,
          status_id: 1,
          image: "top_frameworks_comparison.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          title: "Server-side Coding Tips",
          content:
            `Share tips for clean and efficient server-side code. Start with meaningful variable names! In this detailed discussion, we delve into various coding practices that contribute to maintainable server-side code, enhancing the overall development experience. Writing clean and efficient server-side code is essential for building scalable and maintainable applications. This post provides an extensive collection of coding tips, covering topics such as naming conventions, code organization, and performance optimizations. 
            
            Whether you're a beginner or an experienced developer, these tips will help you write code that is not only functional but also easy to understand and maintain.`,
          category_id: 1,
          user_id: 2206,
          status_id: 2,
          image: "efficient_coding_tips.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          title: "Advanced Server Coding Tips",
          content:
            `Share advanced tips for clean server-side code. Start with meaningful variable names! This content goes a step further, providing insights into advanced server-side coding techniques, optimizations, and best practices for seasoned developers. Building on the foundation of basic coding tips, this post delves into advanced strategies for writing server-side code. 
            
            From design patterns to asynchronous programming, we cover a wide range of topics to help you elevate your coding skills. Discover the nuances of server-side development and learn how to tackle complex challenges with elegance and efficiency.`,
          category_id: 1,
          user_id: 2203,
          status_id: 2,
          image: "advanced_coding_tips.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          title: "Pro Server Coding Tips",
          content:
            `Share professional tips for clean server-side code. Start with meaningful variable names! For developers aiming for excellence, this content offers professional-grade server-side coding tips, emphasizing code quality, scalability, and maintainability. Building professional-grade applications requires a deep understanding of server-side development. This post compiles a set of advanced tips and techniques employed by seasoned professionals. 
            
            Learn how to optimize your code for performance, handle security concerns, and architect robust server-side solutions. Elevate your development skills to a professional level with these invaluable coding insights.`,
          category_id: 1,
          user_id: 2200,
          status_id: 2,
          image: "pro_coding_tips.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          title: "Recommended Hosting Books",
          content:
            `Looking for recommended books on server hosting. Any suggestions? Explore a curated list of recommended books on server hosting, covering a range of topics from basics to advanced techniques. Enhance your knowledge and skills with these valuable resources. Finding the right books is essential for staying updated on the latest trends and best practices in server hosting. 
            
            This post compiles a list of must-read books for both beginners and experienced developers. Whether you're looking to master the fundamentals or dive into advanced topics, these recommended books will be your guide to becoming a proficient server hosting enthusiast.`,
          category_id: 3,
          user_id: 2203,
          status_id: 1,
          image: "recommended_books.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          title: "Hosting Debugging Challenges",
          content:
            `Share your most challenging debugging experiences in server hosting. Learn together! Dive into real-world challenges and solutions as developers share their experiences with hosting debugging. Gain insights into effective debugging strategies and problem-solving. Debugging is an integral part of server hosting, and every developer encounters challenging scenarios. 
            
            In this post, developers come together to share their most difficult debugging experiences. Learn from their insights, discover effective debugging strategies, and join a community of developers dedicated to mastering the art of debugging in server hosting environments.`,
          category_id: 2,
          user_id: 2204,
          status_id: 3,
          image: "hosting_debugging_challenges.gif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          title: "Server Debugging Stories",
          content:
            `Share your most challenging debugging experiences in server hosting. Learn together! Embark on a journey of server-side debugging with developers sharing their most intriguing and educational stories. Discover common pitfalls and effective debugging techniques. Debugging server-side applications can be an adventure, filled with unexpected twists and turns. 
            
            In this post, developers share their most challenging and enlightening server-side debugging stories. From elusive bugs to performance optimizations, these stories provide valuable lessons and insights for developers navigating the complexities of server hosting environments.`,
          category_id: 2,
          user_id: 2205,
          status_id: 3,
          image: "server_debugging_stories.gif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          title: "Hosting Status Update",
          content:
            `Share your most challenging debugging experiences in server hosting. Learn together! Stay informed about the latest developments in server hosting as developers share updates on the status of hosting technologies. Get insights into emerging trends and technologies. The world of server hosting is dynamic, with constant advancements and innovations. 
            
            In this status update, developers share the latest happenings in server hosting, including new technologies, updates, and emerging trends. Stay ahead of the curve by gaining valuable insights into the evolving landscape of server hosting.`,
          category_id: 2,
          user_id: 2200,
          status_id: 4,
          image: "hosting_status_update.gif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
