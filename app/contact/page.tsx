import { Typography } from '../_components/Typography';

export default function Page() {
  return (
    <div className="grid gap-10">
      <div>
        <Typography variant="h2">Send me a message via email</Typography>

        <a
          href="mailto:giuliano.oca@gmail.com"
          className="text-xl text-green-600 underline"
        >
          giuliano.oca@gmail.com
        </a>
      </div>

      <div>
        <Typography variant="h2">Or find me on the social media</Typography>

        <div>
          <a
            href="github.com/giulianovarriale"
            className="text-xl text-green-600 underline"
          >
            github.com/giulianovarriale
          </a>
        </div>

        <div>
          <a
            href="linkedin.com/in/giulianovarriale"
            className="text-xl text-green-600 underline"
          >
            linkedin.com/in/giulianovarriale
          </a>
        </div>
      </div>
    </div>
  );
}
