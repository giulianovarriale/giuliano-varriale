import Link from 'next/link';
import { Typography } from '../_components/Typography';

export default function Page() {
  return (
    <div className="grid gap-10">
      {[
        {
          date: '2024-07-09',
          title: 'Creating my own slack bot',
          slug: 'creating-my-own-slack-bot',
          description:
            'I created a slack bot that can be used to create new issues in GitHub.',
        },
        {
          date: '2024-10-29',
          title: 'Building a drawing app',
          slug: 'building-a-drawing-app',
          description:
            'I built a drawing app that allows users to draw on a canvas.',
        },
      ].map((experiment) => (
        <div key={experiment.slug}>
          <Typography variant="small" className="mb-1">
            {experiment.date}
          </Typography>

          <Typography variant="h2">{experiment.title}</Typography>

          <Typography variant="p" className="mb-2">
            {experiment.description}
          </Typography>

          <Link
            href="https://www.google.com"
            target="_blank"
            className="text-xl text-green-600 underline"
          >
            visit the experiment
          </Link>
        </div>
      ))}
    </div>
  );
}
