module.exports = {
  docs: [
    {
      type: 'link',
      label: 'Home',
      href: '/',
    },
    {
      type: 'category',
      label: 'Games',
      items: [
        'games/index-games',
        {
          type: 'category',
          label: 'Spider Solitaire',
          items: [
            'games/spider/index-spider',
            'games/spider/redis-on-aws/index-redis-on-aws',
            'games/spider/slackbot/index-slackbot',
            'games/spider/terraform/index-terraform',
            'games/spider/bidding-on-aws/index-bidding-on-aws',
            'games/spider/import/index-database-migration-aws-elasticache-redis-enterprise-cloud',
            'games/spider/chatapp/index-chatapp',
            'games/spider/analytics-using-aws/index-analytics-using-aws',
          ],
        },
        {
          type: 'category',
          label: 'Guacamole',
          items: [
            'games/guacamole/index-guacamole',
            'games/guacamole/nodejs-nginx-redis/index-nodejs-nginx-redis',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Company',
      items: [
        'company/index-develop',
        {
          type: 'category',
          label: 'Node.js',
          items: [
            'company/node/index-node',
            'company/node/gettingstarted/index-gettingstarted',
            {
              type: 'category',
              label: 'Node.js Crash Course',
              items: [
                'company/node/node-crash-course/index-node-crash-course',
                'company/node/node-crash-course/welcome/index-welcome',
                'company/node/node-crash-course/whatisredis/index-whatisredis',
                'company/node/node-crash-course/redisandnodejs/index-redisandnodejs',
                'company/node/node-crash-course/introducingredisinsight/index-introducingredisinsight',
                'company/node/node-crash-course/sampleapplicationoverview/index-sampleapplicationoverview',
                'company/node/node-crash-course/runningtheapplication/index-runningtheapplication',
                'company/node/node-crash-course/domainobjectswithhashes/index-domainobjectswithhashes',
                'company/node/node-crash-course/introductiontomodules/index-introductiontomodules',
                'company/node/node-crash-course/redisjson/index-redisjson',
                'company/node/node-crash-course/redisearch/index-redisearch',
                'company/node/node-crash-course/checkinswithstreams/index-checkinswithstreams',
                'company/node/node-crash-course/managingsuccess/index-managingsuccess',
                'company/node/node-crash-course/caching/index-caching',
                'company/node/node-crash-course/sessionstorage/index-sessionstorage',
                'company/node/node-crash-course/advancedstreams/index-advancedstreams',
                'company/node/node-crash-course/redisbloom/index-redisbloom',
                'company/node/node-crash-course/coursewrapup/index-coursewrapup',
              ],
            },
            'company/node/redis-om/index-redis-om',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        {
          type: 'category',
          label: 'Observability',
          items: [
            'support/observability/redisdatasource/index-redisdatasource',
            'support/observability/datadog/index-datadog',
          ],
        },
        {
          type: 'category',
          label: 'Provisioning',
          items: ['support/provisioning/terraform/index-terraform'],
        },
        {
          type: 'category',
          label: 'Running Redis at Scale',
          items: [
            'support/redis-at-scale/index-redis-at-scale',
            {
              type: 'category',
              label: '1 Talking to Redis',
              items: [
                'support/redis-at-scale/talking-to-redis/redis-server-overview/index-redis-server-overview',
                'support/redis-at-scale/talking-to-redis/command-line-tool/index-command-line-tool',
                'support/redis-at-scale/talking-to-redis/configuring-a-redis-server/index-configuring-a-redis-server',
                'support/redis-at-scale/talking-to-redis/redis-clients/index-redis-clients',
                'support/redis-at-scale/talking-to-redis/client-performance-improvements/index-client-performance-improvements',
                'support/redis-at-scale/talking-to-redis/initial-tuning/index-initial-tuning',
              ],
            },
            {
              type: 'category',
              label: '2 Persistence & Durability',
              items: [
                'support/redis-at-scale/persistence-and-durability/introduction/index-introduction',
                'support/redis-at-scale/persistence-and-durability/persistence-options-in-redis/index-persistence-options-in-redis',
                'support/redis-at-scale/persistence-and-durability/exercise/index-exercise',
              ],
            },
            {
              type: 'category',
              label: '3 High Availability',
              items: [
                'support/redis-at-scale/high-availability/introduction/index-introduction',
                'support/redis-at-scale/high-availability/basic-replication/index-basic-replication',
                'support/redis-at-scale/high-availability/exercise-1/index-exercise-1',
                'support/redis-at-scale/high-availability/understanding-sentinels/index-understanding-sentinels',
                'support/redis-at-scale/high-availability/exercise-2/index-exercise-2',
              ],
            },
            {
              type: 'category',
              label: '4 Scalability',
              items: [
                'support/redis-at-scale/scalability/clustering-in-redis/index-clustering-in-redis',
                'support/redis-at-scale/scalability/exercise-1/index-exercise-1',
                'support/redis-at-scale/scalability/redis-cli-with-redis-cluster/index-redis-cli-with-redis-cluster',
                'support/redis-at-scale/scalability/redis-cluster-and-client-libraries/index-redis-cluster-and-client-libraries',
              ],
            },
            {
              type: 'category',
              label: '5 Observability',
              items: [
                'support/redis-at-scale/observability/introduction/index-introduction',
                'support/redis-at-scale/observability/data-points-in-redis/index-data-points-in-redis',
                'support/redis-at-scale/observability/exercise-1/index-exercise-1',
                'support/redis-at-scale/observability/identifying-issues/index-identifying-issues',
              ],
            },
            {
              type: 'category',
              label: '6 Course wrap-up',
              items: ['support/redis-at-scale/course-wrap-up/index-wrap-up'],
            },
          ],
        },
        {
          type: 'category',
          label: 'Orchestration',
          items: [
            'support/orchestration/index-orchestration',
            'support/orchestration/docker/index-docker',
            'support/orchestration/nodejs-nginx-redis/index-nodejs-nginx-redis',
            'support/orchestration/kubernetes-gke/index-kubernetes-gke',
            'support/orchestration/kubernetes-operator/index-kubernetes-operator',
          ],
        },
      ],
    },
  ],
};
