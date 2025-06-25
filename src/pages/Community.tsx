
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  MessageCircle, 
  ThumbsUp, 
  Share, 
  Trophy,
  Calendar,
  User,
  Plus,
  Search,
  Filter,
  Star
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const tabs = [
    { id: 'posts', name: '社区动态', icon: MessageCircle },
    { id: 'study-groups', name: '学习小组', icon: Users },
    { id: 'achievements', name: '成就榜', icon: Trophy },
    { id: 'events', name: '活动中心', icon: Calendar }
  ];

  const posts = [
    {
      id: 1,
      author: '张阿姨',
      avatar: '/placeholder.svg',
      title: '终于学会用微信视频通话了！',
      content: '感谢老师们的耐心指导，现在我可以和远在外地的孙子视频聊天了，看到他的笑脸特别开心！',
      time: '2小时前',
      likes: 24,
      comments: 8,
      category: '学习心得',
      images: ['/placeholder.svg']
    },
    {
      id: 2,
      author: '李大爷',
      avatar: '/placeholder.svg',
      title: '网上买菜真方便',
      content: '之前总担心网上买菜不新鲜，现在试了几次发现质量很好，而且送货上门，对我们老年人来说太方便了！',
      time: '4小时前',
      likes: 18,
      comments: 12,
      category: '生活分享',
      images: []
    },
    {
      id: 3,
      author: '王奶奶',
      avatar: '/placeholder.svg',
      title: '防诈骗经验分享',
      content: '昨天接到一个冒充银行的电话，幸好记住了课程里讲的防骗技巧，没有上当。提醒大家一定要警惕！',
      time: '6小时前',
      likes: 35,
      comments: 15,
      category: '安全提醒',
      images: []
    }
  ];

  const studyGroups = [
    {
      id: 1,
      name: '微信使用互助群',
      description: '大家一起学习微信的各种功能，互相帮助解决问题',
      members: 128,
      posts: 456,
      category: '智能手机',
      leader: '刘老师',
      active: true
    },
    {
      id: 2,
      name: '健康管理小组',
      description: '分享健康知识，交流养生经验，一起关注身体健康',
      members: 89,
      posts: 234,
      category: '健康养生',
      leader: '陈医生',
      active: true
    },
    {
      id: 3,
      name: '网购达人群',
      description: '分享网购经验，推荐优质商品，避免网购陷阱',
      members: 67,
      posts: 189,
      category: '生活服务',
      leader: '张阿姨',
      active: false
    }
  ];

  const achievements = [
    { rank: 1, name: '李大爷', score: 2450, badge: '学习达人', avatar: '/placeholder.svg' },
    { rank: 2, name: '张阿姨', score: 2280, badge: '分享之星', avatar: '/placeholder.svg' },
    { rank: 3, name: '王奶奶', score: 2150, badge: '互助标兵', avatar: '/placeholder.svg' },
    { rank: 4, name: '刘爷爷', score: 1980, badge: '积极学员', avatar: '/placeholder.svg' },
    { rank: 5, name: '陈奶奶', score: 1850, badge: '认真学员', avatar: '/placeholder.svg' }
  ];

  const events = [
    {
      id: 1,
      title: '智能手机摄影比赛',
      description: '用手机记录生活中的美好瞬间，分享您的摄影作品',
      startDate: '2024-01-15',
      endDate: '2024-01-30',
      participants: 45,
      status: '进行中',
      prize: '前三名获得精美礼品'
    },
    {
      id: 2,
      title: '健康知识问答活动',
      description: '参与健康知识问答，学习更多养生保健知识',
      startDate: '2024-01-20',
      endDate: '2024-01-25',
      participants: 78,
      status: '即将开始',
      prize: '参与即可获得健康手册'
    }
  ];

  return (
    <div className="space-y-8">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[var(--text-primary)]">学习社区</h1>
          <p className="text-[var(--text-secondary)] mt-2 text-xl">
            与同龄人一起学习成长，分享经验心得
          </p>
        </div>
        <Button className="bg-[var(--trust-blue)] hover:bg-blue-600 text-white px-6 py-3 text-lg">
          <Plus className="w-5 h-5 mr-2" />
          发布动态
        </Button>
      </div>

      {/* 标签导航 */}
      <div className="card-professional">
        <div className="flex space-x-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 h-14 flex items-center justify-center gap-2 transition-all ${
                  isActive 
                    ? 'bg-[var(--trust-blue)] text-white' 
                    : 'bg-transparent text-[var(--text-primary)] hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{tab.name}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* 社区动态 */}
      {activeTab === 'posts' && (
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <div className="xl:col-span-3 space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="card-professional">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-[var(--text-primary)]">{post.author}</h3>
                        <Badge className="bg-blue-100 text-[var(--trust-blue)]">{post.category}</Badge>
                        <span className="text-sm text-[var(--text-secondary)]">{post.time}</span>
                      </div>
                      <h4 className="text-lg font-medium text-[var(--text-primary)] mb-3">{post.title}</h4>
                      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{post.content}</p>
                      
                      {post.images.length > 0 && (
                        <div className="mb-4">
                          <div className="w-full h-48 bg-gray-100 rounded-lg"></div>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-6">
                        <Button variant="ghost" className="text-[var(--text-secondary)] hover:text-[var(--trust-blue)]">
                          <ThumbsUp className="w-5 h-5 mr-2" />
                          {post.likes} 点赞
                        </Button>
                        <Button variant="ghost" className="text-[var(--text-secondary)] hover:text-[var(--trust-blue)]">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          {post.comments} 评论
                        </Button>
                        <Button variant="ghost" className="text-[var(--text-secondary)] hover:text-[var(--trust-blue)]">
                          <Share className="w-5 h-5 mr-2" />
                          分享
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="space-y-6">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>热门话题</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">#微信新功能</span>
                  <span className="text-sm text-[var(--text-secondary)]">128讨论</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">#健康小贴士</span>
                  <span className="text-sm text-[var(--text-secondary)]">89讨论</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">#防诈骗经验</span>
                  <span className="text-sm text-[var(--text-secondary)]">67讨论</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* 学习小组 */}
      {activeTab === 'study-groups' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {studyGroups.map((group) => (
            <Card key={group.id} className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-[var(--text-primary)] text-lg">{group.name}</h3>
                  <Badge className={group.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}>
                    {group.active ? '活跃' : '一般'}
                  </Badge>
                </div>
                
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {group.description}
                </p>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">小组长</span>
                    <span className="text-[var(--text-primary)]">{group.leader}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">成员数量</span>
                    <span className="text-[var(--text-primary)]">{group.members}人</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">讨论数量</span>
                    <span className="text-[var(--text-primary)]">{group.posts}条</span>
                  </div>
                </div>
                
                <Button className="w-full bg-[var(--trust-blue)] hover:bg-blue-600 text-white">
                  加入小组
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* 成就榜 */}
      {activeTab === 'achievements' && (
        <div className="space-y-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                学习达人榜
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div key={achievement.rank} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                      achievement.rank === 1 ? 'bg-yellow-500' :
                      achievement.rank === 2 ? 'bg-gray-400' :
                      achievement.rank === 3 ? 'bg-amber-600' :
                      'bg-gray-300'
                    }`}>
                      {achievement.rank}
                    </div>
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[var(--text-primary)]">{achievement.name}</h3>
                      <p className="text-[var(--text-secondary)] text-sm">{achievement.badge}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[var(--trust-blue)] text-lg">{achievement.score}</p>
                      <p className="text-[var(--text-secondary)] text-sm">学习积分</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* 活动中心 */}
      {activeTab === 'events' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-[var(--text-primary)] text-xl">{event.title}</h3>
                  <Badge className={event.status === '进行中' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                    {event.status}
                  </Badge>
                </div>
                
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">活动时间</span>
                    <span className="text-[var(--text-primary)]">{event.startDate} - {event.endDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">参与人数</span>
                    <span className="text-[var(--text-primary)]">{event.participants}人</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">活动奖励</span>
                    <span className="text-[var(--trust-blue)]">{event.prize}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-[var(--active-green)] hover:bg-green-600 text-white">
                  {event.status === '进行中' ? '立即参与' : '报名参加'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Community;
