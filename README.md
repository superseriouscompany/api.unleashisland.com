## Requirements

1. apex https://github.com/apex/apex
1. aws credentials in `~/.aws/credentials`

## Deploy

    $ apex deploy

## HTTP Setup

1. Create API gateway API
1. Add endpoint
1. Change integration request to use Lambda Function as Integration Type
1. Add Body Mapping Template for application/json
1. Deploy API
