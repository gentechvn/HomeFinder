
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Liên hệ với <span className="text-blue-600">chúng tôi</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ với chúng tôi 
            qua các kênh thông tin dưới đây.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Thông tin liên hệ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-blue-600 text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Số điện thoại</h3>
                    <p className="text-gray-600">0911 091 506</p>
                    <p className="text-sm text-gray-500">Hotline hỗ trợ 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-blue-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">ngkhacthinh29@gmail.com</p>
                    <p className="text-sm text-gray-500">Phản hồi trong 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-blue-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Địa chỉ</h3>
                    <p className="text-gray-600">Da Nang, Viet Nam</p>
                    <p className="text-sm text-gray-500">Văn phòng chính</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Kết nối với chúng tôi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/E-Thin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-2xl">🐙</span>
                    <div>
                      <div className="font-semibold text-gray-800">GitHub</div>
                      <div className="text-sm text-gray-600">E-Thin</div>
                    </div>
                  </a>

                  <a
                    href="https://facebook.com/ngkhacthinh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <span className="text-2xl">📘</span>
                    <div>
                      <div className="font-semibold text-gray-800">Facebook</div>
                      <div className="text-sm text-gray-600">ngkhacthinh</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Giờ làm việc</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Thứ 2 - Thứ 6:</span>
                  <span className="font-semibold text-gray-800">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Thứ 7:</span>
                  <span className="font-semibold text-gray-800">8:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Chủ nhật:</span>
                  <span className="font-semibold text-gray-800">9:00 - 15:00</span>
                </div>
                <div className="mt-4 p-3 bg-green-100 rounded-lg">
                  <p className="text-sm text-green-800">
                    📞 Hotline hỗ trợ khẩn cấp: 24/7
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Gửi tin nhắn cho chúng tôi</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Họ và tên *</Label>
                      <Input id="name" placeholder="Nhập họ tên của bạn" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Số điện thoại *</Label>
                      <Input id="phone" placeholder="Nhập số điện thoại" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="Nhập địa chỉ email" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Chủ đề</Label>
                    <Input id="subject" placeholder="Chủ đề tin nhắn" />
                  </div>

                  <div>
                    <Label htmlFor="message">Nội dung *</Label>
                    <Textarea
                      id="message"
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                    Gửi tin nhắn
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Lưu ý:</strong> Chúng tôi sẽ phản hồi tin nhắn của bạn trong vòng 24 giờ. 
                    Đối với các vấn đề khẩn cấp, vui lòng gọi trực tiếp hotline.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Câu hỏi thường gặp</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Làm thế nào để đăng tin bán/cho thuê bất động sản?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Bạn có thể đăng tin miễn phí bằng cách nhấn nút "Đăng tin" trên trang chủ 
                    và làm theo hướng dẫn.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Phí dịch vụ là bao nhiều?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Chúng tôi có các gói dịch vụ khác nhau phù hợp với nhu cầu. 
                    Liên hệ để được tư vấn chi tiết.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Làm sao để xác minh thông tin bất động sản?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Tất cả tin đăng đều được kiểm duyệt. Chúng tôi cũng hỗ trợ xác minh 
                    pháp lý miễn phí cho khách hàng.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
