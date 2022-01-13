// @ts-ignore
import Fade from 'react-reveal/Fade'
import { useEffect } from 'react'
import Link from 'next/link';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Section from '../Section';
import { GoChevronRight } from 'react-icons/go'

/**
 *  Custom form could be created here using MailChimpSubscribe package.
 */

const CustomForm = ({ status, message, onValidated }: any) => {
  let email: any

  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div
      style={{
        background: "transparent",
        borderRadius: 2,
        padding: 10,
        display: "flex",
        flexDirection: 'column',
      }}
      className="relative w-[100%] lg:w-[50%] items-center lg:items-start"
    >
      <div style={{ maxWidth: '400px', minWidth: '250px' }} className="relative flex justify-center lg:justify-start items-center relative w-[100%] lg:w-[50%]">
        <input
          style={{ fontSize: "1.125rem", background: 'transparent', borderRadius: '0.5rem', borderWidth: '2px', padding: '0.75rem 1rem', lineHeight: '1.75rem', paddingRight: '3rem', width: '100%' }}
          ref={node => (email = node)}
          type="email"
          placeholder="email"
        />
        <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '20%', height: '100%', right: '0' }} onClick={submit}>
          <GoChevronRight />
        </button>
      </div>
      {status === "sending" && <div className="mailchimp_sending text-center absolute bottom-[-25%] text-[0.8rem] w-[70%] lg:text-left" style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          className="mailchimp_error text-center absolute bottom-[-45%] text-[0.8rem] w-[70%] lg:text-left"
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mailchimp_success text-center absolute bottom-[-45%] text-[0.8rem] w-[70%] lg:text-left"
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
};

const NewsletterSection = () => {
  return (
    <Fade>
      <Section topPadding>
        <div className="container w-[100%] flex flex-col flex-shrink items-center justify-center gap-8 lg:flex-row">
          <div className="w-[100%] lg:w-[50%] flex items-center lg:items-end flex-col">
            <h2 className="text-xl">Sign up for our latest news</h2>
            <p>
              <span className="text-gray-400">Unsubscribe at any time.</span>{' '}
              <Link href="/privacy-policy">
                <a>Privacy policy</a>
              </Link>
            </p>
          </div>
          <MailchimpSubscribe
            url="https://txlabs.us20.list-manage.com/subscribe/post?u=a711fae0e3e98a0d293d02bfa&amp;id=1a17c3febe"
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData: any) => subscribe(formData)}
              />
            )}
          />
        </div>
      </Section>
    </Fade>
  );
}


export default NewsletterSection;
