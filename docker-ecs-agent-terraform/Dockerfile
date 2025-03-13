FROM amazon/amazon-ecs-agent:latest

# Install dependencies
RUN yum install -y unzip curl 

# Download Terraform
RUN curl -fsSL -o terraform.zip https://releases.hashicorp.com/terraform/1.7.5/terraform_1.7.5_linux_amd64.zip \
    && unzip terraform.zip \
    && mv terraform /usr/local/bin/ \
    && rm terraform.zip

# Verify installation
RUN terraform version
