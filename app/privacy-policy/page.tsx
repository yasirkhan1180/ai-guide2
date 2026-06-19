import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Guide',
  description: 'Privacy Policy for AI Guide blog site.',
}

export default function PrivacyPolicy() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Privacy Policy
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Last updated:{' '}
          {new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
        <p>
          At AI Guide, accessible from your domain, one of our main priorities is the privacy of our
          visitors. This Privacy Policy document contains types of information that is collected and
          recorded by AI Guide and how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do
          not hesitate to contact us.
        </p>

        <h2>1. Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          The personal information that you are asked to provide, and the reasons why you are asked
          to provide it, will be made clear to you at the point we ask you to provide your personal
          information.
        </p>
        <ul>
          <li>
            <strong>Newsletter Subscriptions:</strong> If you subscribe to our newsletter, we
            collect your email address to deliver updates, articles, and promotional content. You
            can opt-out at any time.
          </li>
          <li>
            <strong>Direct Communication:</strong> If you contact us directly, we may receive
            additional information about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any other information
            you may choose to provide.
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>
            Communicate with you, either directly or through one of our partners, including for
            customer service, to provide you with updates and other information relating to the
            website, and for marketing and promotional purposes
          </li>
          <li>Send you emails or newsletters</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2>4. Log Files</h2>
        <p>
          AI Guide follows a standard procedure of using log files. These files log visitors when
          they visit websites. All hosting companies do this as part of hosting services' analytics.
          The information collected by log files includes internet protocol (IP) addresses, browser
          type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and
          possibly the number of clicks. These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends, administering the
          site, tracking users' movement on the website, and gathering demographic information.
        </p>

        <h2>5. Cookies and Web Beacons</h2>
        <p>
          Like any other blogging website, AI Guide uses "cookies". These cookies are used to store
          information including visitors' preferences, and the pages on the website that the visitor
          accessed or visited. The information is used to optimize the users' experience by
          customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <h2>6. Third-Party Advertising Partners</h2>
        <p>
          We may partner with third-party ad networks and programmatic monetization platforms to
          serve advertisements when you visit our site. These third-party ad servers or ad networks
          use technologies like cookies, JavaScript, or Web Beacons that are used in their
          respective advertisements and links that appear on AI Guide, which are sent directly to
          users' browsers. They automatically receive your IP address when this occurs. These
          technologies are used to measure the effectiveness of their advertising campaigns and/or
          to personalize the advertising content that you see on websites that you visit.
        </p>
        <p>
          Note that AI Guide has no access to or control over these cookies that are used by
          third-party advertisers.
        </p>

        <h2>7. Third-Party Privacy Policies</h2>
        <p>
          AI Guide's Privacy Policy does not apply to other advertisers or websites. Thus, we are
          advising you to consult the respective Privacy Policies of these third-party ad servers
          for more detailed information. It may include their practices and instructions about how
          to opt-out of certain options.
        </p>
        <p>
          You can choose to disable cookies through your individual browser options. To know more
          detailed information about cookie management with specific web browsers, it can be found
          at the browsers' respective websites.
        </p>

        <h2>8. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p>Under the CCPA, among other rights, California consumers have the right to:</p>
        <ul>
          <li>
            Request that a business that collects a consumer's personal data disclose the categories
            and specific pieces of personal data that a business has collected about consumers.
          </li>
          <li>
            Request that a business delete any personal data about the consumer that a business has
            collected.
          </li>
          <li>
            Request that a business that sells a consumer's personal data, not sell the consumer's
            personal data.
          </li>
        </ul>
        <p>
          If you make a request, we have one month to respond to you. If you would like to exercise
          any of these rights, please contact us.
        </p>

        <h2>9. GDPR Data Protection Rights</h2>
        <p>
          We would like to make sure you are fully aware of all of your data protection rights.
          Every user is entitled to the following:
        </p>
        <ul>
          <li>
            <strong>The right to access</strong> – You have the right to request copies of your
            personal data.
          </li>
          <li>
            <strong>The right to rectification</strong> – You have the right to request that we
            correct any information you believe is inaccurate.
          </li>
          <li>
            <strong>The right to erasure</strong> – You have the right to request that we erase your
            personal data, under certain conditions.
          </li>
          <li>
            <strong>The right to restrict processing</strong> – You have the right to request that
            we restrict the processing of your personal data, under certain conditions.
          </li>
          <li>
            <strong>The right to object to processing</strong> – You have the right to object to our
            processing of your personal data, under certain conditions.
          </li>
          <li>
            <strong>The right to data portability</strong> – You have the right to request that we
            transfer the data that we have collected to another organization, or directly to you,
            under certain conditions.
          </li>
        </ul>

        <h2>10. Children's Information</h2>
        <p>
          Another part of our priority is adding protection for children while using the internet.
          We encourage parents and guardians to observe, participate in, and/or monitor and guide
          their online activity.
        </p>
        <p>
          AI Guide does not knowingly collect any Personal Identifiable Information from children
          under the age of 13. If you think that your child provided this kind of information on our
          website, we strongly encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>

        <h2>11. Image Copyright Disclaimer & Sourcing</h2>
        <p>
          Visual assets, thumbnails, and illustrative diagrams displayed across AI Guide are sourced
          from publicly accessible open web platforms and search networks, primarily via Google
          Images.
        </p>
        <ul>
          <li>
            <strong>Ownership:</strong> All intellectual property, trademarks, and copyrights belong
            exclusively to their respective original owners, creators, or photographers.
          </li>
          <li>
            <strong>Fair Use:</strong> AI Guide utilizes these visual materials solely for
            non-commercial, educational, and editorial commentary purposes. No copyright
            infringement is intended.
          </li>
          <li>
            <strong>Removal Requests:</strong> If you are the rightful legal owner of any graphical
            asset displayed on this website and object to its usage, or if you require custom
            attribution credits, please contact us immediately. Upon verification, the targeted
            asset will be updated or promptly removed from our systems.
          </li>
        </ul>
      </div>
    </div>
  )
}
